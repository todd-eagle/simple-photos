const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const templateID = 'd-3519d20db21847249db89e02de170122' 
const fromEmail = 'no-reply@thecrackle.us'

module.exports = {
    sendMail: (req, res) => {
        const {email} = req.body

        const msg = {
          to: `${email}`,
          from: `${fromEmail}`,
          templateId: templateID
        }
        // const sentMail = await sgMail.send(msg)
        // sentMail ? res.status(200).send('Email sent') : res.status(500).send('Server error: mail not sent')
        sgMail.send(msg)
        .then(() => {
          console.log('Email sent')
        })
        .catch((error) => {
          console.error(error)
        })
    }
}