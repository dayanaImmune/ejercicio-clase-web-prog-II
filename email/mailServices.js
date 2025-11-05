// src/services/mailer.cjs
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

async function sendEmail(to, subject, html) {
    try {
        const info = await transporter.sendMail({
            from: `"Mi API" <${process.env.EMAIL_USER}>`,
            to,
            subject,
            html
        });
        console.log("Correo enviado ✅", info.messageId);
        return info;
    } catch (err) {
        console.error("Error enviando correo:", err);
        throw err;
    }
}

module.exports = { sendEmail, transporter };
