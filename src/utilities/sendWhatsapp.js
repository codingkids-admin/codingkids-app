const defaultValue = "+6285161774568";
function sendWhatsapp(text, phoneNumber = defaultValue) {
  return `https://wa.me/${phoneNumber}?text=${encodeURI(text)}`;
}

export default sendWhatsapp;
