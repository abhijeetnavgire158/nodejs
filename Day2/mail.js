var nodemailer = require('nodemailer');

async function main() {
    let testAccount = await nodemailer.createTestAccount();
    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: testAccount.user,
            pass: testAccount.pass 
        }
    });

    //send mail
    let info = await transporter.sendMail({
       from: '"Abhijeet Navgire" <abhijeet@mailinator.com>',
       to: 'nodetest@mailinator.com',
       subject: 'test mail subject',
       html: '<H1>NodeJS Mail'
    });

    console.log('Message ID ' + info.messageId);

    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

main().catch (function(error){
    console.error(error);
});