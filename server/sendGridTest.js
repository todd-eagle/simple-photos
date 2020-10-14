require('dotenv').config();
const sgMail = require('@sendgrid/mail')
const templateID = 'd-3519d20db21847249db89e02de170122'
const fromEmail = 'no-reply@thecrackle.us'

const email = 'todd.eagle@outlook.com'

const {SENDGRID_API_KEY} = process.env

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const msg = {
  to: `${email}`, // Change to your recipient
  from: `${fromEmail}`, // Change to your verified sender
  templateId: templateID
  }

sgMail
.send(msg)
.then(() => {
  console.log('Email sent')
})
.catch((error) => {
  console.error(error)
})
