const bcryptjs = require('bcryptjs')

module.exports = {
    register: async(req, res) => {
        const db = req.app.get('db')
        const {email, password} = req.body
       
        const [registered] = await db.p_users.find({email})
        
        if(registered){
            return res.status(409).send('Email exists.')
        }

        const hash = bcryptjs.hashSync(password, bcryptjs.genSaltSync(10))

        const registeredUser = await db.p_users.insert({email: email, password: hash})

        req.session.user = {
            id: registeredUser.id,
            email: registeredUser.email
        }

        res.status(200).send(req.session.user)
    },
    login: async(req, res) => {
        const db = req.app.get('db')
        const {email, password} = req.body

        const userFound = await db.p_users.find({email})

        if(!userFound){
            return res.status(404).send('Email not found')
        }

        const authenticated = bcryptjs.compareSync(password, userFound[0].password)
        
        if(authenticated){
            req.session.user = {
                id: userFound[0].id,
                email: userFound[0].email,
            }
            return res.status(200).send(req.session.user)
        }
        res.status(403).send('Email or password is incorrect')
    },
    logout: (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    },
    grabUserSession: async(req, res) => {
        await req.session.user ? res.status(200).send(req.session.user) :  res.status(500).send('Server error, session not created')
    }
}