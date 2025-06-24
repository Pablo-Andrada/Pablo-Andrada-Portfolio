// api/contact.js
require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Configuración de Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail', // Puedes cambiar a otro servicio (Outlook, etc.)
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Ruta para enviar correo
app.post('/send-email', (req, res) => {
  const { name, email, subject, message } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER, // Tu correo donde recibirás los mensajes
    subject: `Contacto Portfolio: ${subject}`,
    text: `
      Nombre: ${name}
      Email: ${email}
      Mensaje: ${message}
    `,
    html: `
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${message}</p>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ error: 'Error al enviar el mensaje' });
    }
    console.log('Mensaje enviado: %s', info.messageId);
    res.status(200).json({ message: 'Mensaje enviado con éxito' });
  });
});

app.listen(port, () => {
  console.log(`Servidor API corriendo en http://localhost:${port}`);
});