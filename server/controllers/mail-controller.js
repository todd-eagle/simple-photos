require('dotenv').config();
const sgMail = require('@sendgrid/mail')
const templateID = 'd-3519d20db21847249db89e02de170122' 
const fromEmail = 'no-reply@thecrackle.us'

module.exports = {
    sendMail: (req, res) => {
        const {email} = req.body
        
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

        // const msg = {
        //   to: `${email}`,
        //   from: `${fromEmail}`,
        //   templateId: templateID
        // }
        // const sentMail = await sgMail.send(msg)
        // sentMail ? res.status(200).send('Email sent') : res.status(500).send('Server error: mail not sent')
    }
}