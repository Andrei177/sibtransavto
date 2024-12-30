require("dotenv").config();

const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

const PORT = 5000;

app.use(express.json());
app.use(cors());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS,
  },
  // host: 'smtp.mail.ru',
  // port: 465,
  // secure: false,
  // auth: {
  //     user: process.env.MAIL,
  //     pass: process.env.MAIL_PASS
  // }
});

app.post("/submit", (req, res) => {
  const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    // from: process.env.MAIL,
    // to: process.env.EMAIL, //"zroychenkomatvey@gmail.com", // Куда будут приходить заявки
    subject: "Новая заявка с сайта СИБТРАНСАВТО",
    html: `
    <h2>Новая заявка с сайта СИБТРАНСАВТО</h2>
    <p><strong>Дата отправки:</strong> ${new Date().toLocaleString()}</p>
    <p><strong>Имя:</strong> ${req.body.firstName}</p>
    <p><strong>Номер телефона:</strong> ${req.body.phoneNumber}</p>
    <p><strong>Откуда:</strong> ${req.body.from}</p>
    <p><strong>Куда:</strong> ${req.body.to}</p>
    <p><strong>Название груза:</strong> ${req.body.titleCargo}</p>
    <p><strong>Размеры груза:</strong></p>
    <ul>
      <li><strong>Длина:</strong> ${req.body.length} м</li>
      <li><strong>Ширина:</strong> ${req.body.width} м</li>
      <li><strong>Высота:</strong> ${req.body.height} м</li>
    </ul>
    <p><strong>Вес груза:</strong> ${req.body.weight} тонн</p>
    `
  };

  transporter
    .sendMail(mailOptions)
    .then((response) => {
      res.status(200).json({ message: "Заявка успешно отправлена!" });
      console.log(response);
    })
    .catch((err) => {
      res.status(500).json({ message: "Ошибка при отправке заявки" });
      console.log(err);
    });
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на ${PORT} порту`);
});
