const nodemailer = require('nodemailer');
//const mailGun = require('nodemailer-mailgun-transport');

// const auth = {
//     auth: {
//         user: 'ankita451995@gmail.com',
//         pass: 'Arp@451995'
//     }
// };

// const transporter = nodemailer.createTransport();

const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'ankita451995@gmail.com',
              pass: 'Arp@451995'
            }
          });


const sendMail = (email, subject, text, cb) => {
    const mailOptions = {
        from: 'ankita451995@gmail.com', // TODO replace this with your own email
        to: email, // TODO: the receiver email has to be authorized for the free tier
        subject,
        text
    };

    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            return cb(err, null);
        }
        return cb(null, data);
    });
}

module.exports = sendMail;