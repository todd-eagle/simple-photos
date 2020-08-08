const bcryptjs = require('bcryptjs')
const createFolder = require('../Upload/createFolder')

module.exports = {
    register: async(req, res) => {
        const db = req.app.get('db')
        const {email, password} = req.body
        const folderId = Math.floor(Math.random() * Math.floor(3000000))
       
        const [registered] = await db.p_users.find({email})
        
        if(registered){
            return res.status(409).send('Email exists.')
        }

        const createdFolder = await createFolder.createFolder(folderId)
        // console.log(createdFolder)

        const hash = bcryptjs.hashSync(password, bcryptjs.genSaltSync(10))

        const registeredUser = await db.p_users.insert({email: email, password: hash, folder_id: folderId})

        req.session.user = {
            id: registeredUser.id,
            email: registeredUser.email,
            folder_id: registeredUser.folder_id
        }

        res.status(200).send(req.session.user)
    },
    login: async(req, res) => {
        const db = req.app.get('db')
        const {email, password} = req.body
        // console.log("req.body ", req.body)
        
        const userFound = await db.p_users.find({email})
        console.log("userFound ", userFound)
        // userFound.length===0 ? console.log("Not found") : console.log("found");
        if(userFound.length===0){
            console.log('Email not found')
            return res.status(404).send('Email not found')
        }
        const authenticated = bcryptjs.compareSync(password, userFound[0].password)
        if(authenticated){
            req.session.user = {
                id: userFound[0].id,
                email: userFound[0].email,
                folder_id: userFound[0].folder_id
            }
            return res.status(200).send(req.session.user)
        }
        return res.status(404).send('Email or password is incorrect')
    },
    logout: (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    },
    grabUserSession: async(req, res) => {
        await req.session.user ? res.status(200).send(req.session.user) :  res.status(500).send('Server error, session not created')
    }
}