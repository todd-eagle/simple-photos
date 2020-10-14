require('dotenv').config();
const sgMail = require('@sendgrid/mail')
const templateID = 'd-3519d20db21847249db89e02de170122' 
const fromEmail = 'no-reply@thecrackle.us'

const {email} = 'todd.eagle@outlook.com'

const {SENDGRID_API_KEY} = process.env

sgMail.setApiKey(process.env.SENDGRID_API_KEY)
console.log()

const msg = {
  to: `${email}`, // Change to your recipient
  from: `${fromEmail}`, // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}

sgMail
.send(msg)
.then(() => {
  console.log('Email sent')
})
.catch((error) => {
  console.error(error)
})
