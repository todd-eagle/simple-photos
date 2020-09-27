const transporter = require('../index')
const nodemailer = require("nodemailer")

const {SERVER_PORT, EMAIL_PORT, SMTP_SERVER, USERNAME, PASSWORD} = process.env;

module.exports = {
    sendMail: async(req, res) => {
        const {email} = req.body

        const transporter = nodemailer.createTransport({
            host: SMTP_SERVER, 
            port: EMAIL_PORT,
            auth: {
              user: `${USERNAME}`,
              pass: `${PASSWORD}` 
            }
          })
          
          transporter.verify(function(error, success) {
              if (error) {
                console.log(error);
              } else {
                console.log("Server is ready to take our messages!");
              }
            })

        if(email){
            let info = await transporter.sendMail({
                from: '"Todd Eagle" <todd.eagle@gmail.com>', // sender address
                to: `${email}, ${email}`, // list of receivers
                subject: "Welcome to SimplePhotos!", // Subject line
                // text: "Hello world?", // plain text body
                html: "<bWelcome to SimplePhotos!</b>", // html body
            })
            info ? res.status(200).send('email sent') : res.status(500).send('email not sent')
        } else {res.status(404).send('email not found')}
        // email ? res.status(200).send('email sent'):
        //res.status(500).send('email not sent')
    }
}