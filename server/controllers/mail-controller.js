const transporter = require('../index')
const nodemailer = require("nodemailer")
const hbs = require('nodemailer-express-handlebars')

const {SERVER_PORT, EMAIL_PORT, SMTP_SERVER, USERNAME, PASSWORD} = process.env;

module.exports = {
    sendMail: async(req, res) => {
        const {email} = req.body

        const transporter = nodemailer.createTransport({
            service: "SendinBlue",
            auth: {
              user: `${USERNAME}`,
              pass: `${PASSWORD}` 
            }
          })

          transporter.use('compile', hbs({
            viewEngine:'express-handlebars',
            viewPath: '../views/'
          }))
          
          transporter.verify(function(error, success) {
              if (error) {
                console.log(error);
              } else {
                console.log("Server is ready to take our messages!");
              }
            })

        if(email){
            let info = await transporter.sendMail({
                from: '"Todd Eagle" <todd.eagle@gmail.com>',
                to: `${email}, ${email}`, 
                subject: "Welcome to SimplePhotos!", 
                template: 'index'
              })
            info ? res.status(200).send('email sent') : res.status(500).send('email not sent')
        } else {res.status(404).send('email not found')}
        // email ? res.status(200).send('email sent'):
        //res.status(500).send('email not sent')
    }
}