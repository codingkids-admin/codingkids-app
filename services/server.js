const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: "magna.jagoanhosting.com",
  port: 465,
  secure: true,
  tls: {
    servername: "magna.jagoanhosting.com",
  },
  auth: {
    user: "admin@codingkids.id",
    pass: "NwG[V_Qx4U0i",
  },
});

app.get("/", (req, res) => {
  if (
    req.headers.authorization != undefined &&
    req.headers.authorization == process.env.AUTH
  ) {
    res.status(200).json({
      code: 200,
      message: "Server running",
    });
  } else {
    res.status(403).json({
      code: 403,
      message: "Invalid authorization token",
    });
  }
});

app.post("/api/send", (req, res) => {
  const mailOptions = {
    from: "admin@codingkids.id",
    to: ["admin@codingkids.id"],
    subject: "[Website] New student data",
    html: req.body.message,
  };

  if (
    req.headers.authorization != undefined &&
    req.headers.authorization == process.env.AUTH
  ) {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).json({
          code: 500,
          message: error,
        });
      }
      res.status(200).json({
        code: 200,
        message: "Email sent successfully",
      });
    });
  } else {
    res.status(403).json({
      code: 403,
      message: "Invalid authorization token",
    });
  }
});

const port = 3001 || process.env.PORT;
app.listen(port, () => console.log(`Server running on port ${port}`));
