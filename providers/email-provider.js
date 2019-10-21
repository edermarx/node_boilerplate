const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
  host: process.env.MY_HOST,
  port: 465,
  secure: true, // use SSL
  auth: {
    user: process.env.MY_EMAIL,
    pass: process.env.MY_PASSWORD,
  },
});

// eslint-disable-next-line object-curly-newline
const sendEmail = ({ name, phone, email, message, subject }) => new Promise((resolve, reject) => {
  try {
    const mailOptions = {
      from: process.env.MY_EMAIL,
      to: 'edermarques96@gmail.com', // TODO: mudar para o email que for receber os contatos
      subject: 'Contato - Site',
      html: `
      <p>Nome: ${name}</p>
      <p>Telefone: ${phone}</p>
      <p>Email: ${email}</p>
      <p>Assunto: ${subject}</p>
      <p>Mensagem: ${message}</p>
      `,
    };

    transporter.sendMail(mailOptions, (err) => {
      if (err) {
        console.log('Error');
        reject(err);
      }
      resolve('ok');
    });
  } catch (err) {
    console.log(err);
    reject(err);
  }
});

module.exports = sendEmail;
