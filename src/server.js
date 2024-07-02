const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    host: '0.0.0.0',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'jezz@docker.local',
        pass: 'supersecret'
    },
    tls: { rejectUnauthorized: false },
    debug: true,
});

let mailOptions = {
    from: '<jezz@docker.local>',
    to: 'yarekit988@luravel.com',
    subject: 'Hello ✔',
    text: 'Hello world?',
    html: '<b>Hello world?</b>'
};

transporter.verify((error) => {
    if (error) {
        return console.error(error);
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.error(error);
        }
        console.log('Message sent: %s', info.messageId);
    });
});
