import { headers } from "next/headers";
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function GET(request) {
  if (headers().get("Authorization") != process.env.AUTH) {
    return NextResponse.json(
      { code: 403, message: "Unauthorized access token" },
      {
        status: 403,
      }
    );
  }

  return NextResponse.json(
    { code: 200, message: "Success" },
    {
      status: 200,
    }
  );
}

export async function POST(request) {
  if (headers().get("Authorization") != process.env.AUTH) {
    return NextResponse.json(
      { code: 403, message: "Unauthorized access token" },
      {
        status: 403,
      }
    );
  }

  try {
    const data = await request.json();
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

    const mailOptions = {
      from: "admin@codingkids.id",
      to: ["admin@codingkids.id"],
      subject: "[Website] New student data",
      html: data["message"],
    };

    const mailTf = await transporter.sendMail(mailOptions);
    if (mailTf.response.includes("OK") && mailTf.messageId) {
      return NextResponse.json(
        { code: 201, message: "Email successfully sent" },
        {
          status: 201,
        }
      );
    } else {
      return NextResponse.json(
        { code: 500, message: "Something wrong in mail service" },
        {
          status: 500,
        }
      );
    }
  } catch (ex) {
    return NextResponse.json(
      { code: 400, message: `[Bad request] ${ex}` },
      {
        status: 400,
      }
    );
  }
}
