const nodemailer = require('nodemailer');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.post('/sendMail', (req, res) => {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    // port: 587,
    // secure: false, // true for 465, false for other ports
    auth: {
      user: 'websmartr1234@gmail.com', //This is the email which sends the email
      pass: 'password1234@u'
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  // send mail with defined transport object
  let info = transporter.sendMail({
    from: req.body.email, // sender address
    to: 'keithlem9@gmail.com', // list of receivers This is the person who is entered in the input field.
    subject: 'Contact', // Subject line
    text: req.body.message, // plain text body
    html: req.body.message // html body
  });

  console.log('Message sent: %s', info.messageId);
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
});

app.listen(3001, () => {
  console.log('server is running on 3001');
});
