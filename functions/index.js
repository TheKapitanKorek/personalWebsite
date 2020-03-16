const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const cors = require("cors")({ origin: true });
admin.initializeApp(functions.config().firebase);

//Mail
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: functions.config().gmail.email,
    pass: functions.config().gmail.password
  },
  tls: {
    rejectUnauthorized: false
  }
});

exports.sendMail = functions.https.onRequest((req, res) => {
  return cors(req, res, () => {
    const { name, email, subject, message } = req.body;
    const output = `
      <p style='color:#5A4A9D; font-size:18px; font-weight:500;'>Ktoś ma coś do powiedzenia:</p>
      <ul>
        <li>Imię i nazwisko:${name}</li>
        <li>Adres email:${email}</li>
        <li>Tytuł wiadomości:${subject}</li>
        <li>Treść wiadomości:${message}</li>
      </ul>
   `;
    const mailOptions = {
      from: "Portfolio <tomekmessanger@gmail.com>",
      to: "tomplomin@gmail.com",
      subject: "Pracka ",
      replyTo: email,
      html: output
    };

    // returning result
    return transporter.sendMail(mailOptions, erro => {
      if (erro) {
        return res.status(400).send(erro.toString());
      }
      res.send("ok");
    });
  });
});
