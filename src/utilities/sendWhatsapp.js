const defaultValue = "+6282124111645";
function sendWhatsapp(text, phoneNumber = defaultValue) {
  return `https://wa.me/${phoneNumber}?text=${encodeURI(text)}`;
}

export default sendWhatsapp;
