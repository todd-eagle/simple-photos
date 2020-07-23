module.exports = {
    insertPhotoData: async(req, res) => {
        const db = req.app.get('db')
        try{
            await db.photos.insert(req.body)
            res.status(200).send('Data inserted')
        }catch(err){
            res.status(500).send(err)
        }   
    },
    getPhotoData: async(req, res) => {
        const db = req.app.get('db')
        try{
            const data = await db.photos.find(req.params)
            res.status(200).send(data)
        }catch(err){
            res.status(500).send(err)
        }
    },
    deletePhotoData: async(req, res) => {
        const db = req.app.get('db')
        try{
            await db.photos.destroy(req.params)
            res.status(200).send('Data deleted')
        }catch(err){
            res.status(500).send(err)
        }
    },
    updatePhotoData: async(req, res) => {
        const db = req.app.get('db')
        try{
            await db.photos.save(req.body)
            res.status(200).send('Data updated')
        }catch(err){
            res.status(500).send(err)
        }
    },
    getUserData: async(req, res) => {
        const db = req.app.get('db')
        try {
            const userData = await db.profiles.find(req.params)
            res.status(200).send(userData)
        }catch(err){
            res.status(500).send(err)
        }
    },
    insertUserData: async(req, res) => {
        const db = req.app.get('db')
        try{
            await db.profiles.insert(req.body)
            res.status(200).send('User data inserted')
        }catch(err){
            res.status(500).send(err)
        }
    },
    updateUserData: async(req, res) => {
        const db = req.app.get('db')
        try{
            await db.profiles.save(req.body)
            res.status(200).send('User data updated')
        }catch(err){
            res.status(500).send(err)
        }
    }
}