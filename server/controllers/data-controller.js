const path = require('path')

module.exports = {
    insertPhotoData: async(req, res) => {
        const {title, tags} = req.body
        const {user_id} = req.params
        const db = req.app.get('db')
        const dataInserted = await db.photos.insert({user_id, title, tags})
        //console.log('dataInserted ', dataInserted)
        dataInserted ? res.status(200).send(dataInserted) :
        res.status(500).send(err)
    },
    getPhotoData: async(req, res) => {
        const db = req.app.get('db')
        const data = await db.photos.find(req.params)
        data ? res.status(200).send(data) :
        res.status(500).send(err)
    },
    deletePhotoData: async(req, res) => {
        const db = req.app.get('db')
        const deletedData = await db.photos.destroy(req.params)
        deletedData ? res.status(200).send('Data deleted') :
        res.status(500).send(err)
    },
    updatePhotoData: async(req, res) => {
        const db = req.app.get('db')
        const updatedPhotoData = await db.photos.save(req.body)
        updatedPhotoData ? res.status(200).send('Data updated') :
        res.status(500).send(err)
    },
    getUserData: async(req, res) => {
        const db = req.app.get('db')
        const userData = await db.profiles.find(req.params)
        userData ? res.status(200).send(userData) :
        res.status(500).send(err)
    },
    insertUserData: async(req, res) => {
        const db = req.app.get('db')
        const insertedData =  await db.profiles.insert(req.body)
        insertedData ? res.status(200).send('User data inserted') :
        res.status(500).send(err)
    },
    updateUserData: async(req, res) => {
        const db = req.app.get('db')
        const updatedUserData =  await db.profiles.save(req.body)
        updatedUserData ? res.status(200).send('User data updated') :
        res.status(500).send(err)
    },
    uploadFile: async(req, res) => {
        const db = req.app.get('db')
        const {id, email} = req.params

        // console.log(req)

        if(!req.files) {
            return res.status(400).send('Image not uploaded')
        }

        let image = req.files.image
        let imageFolder = path.join(__dirname, '../../', 'src/assets/images')
        let uploadPath = `${imageFolder}/${email}/${image.name}` 
        let linkPath = `/assets/images/${email}/${image.name}`
        
        // console.log(uploadPath)

        const updatedImageLink = await db.photos.save({id: id, link: linkPath})

        image.mv(uploadPath, err=> {
            err ? res.status(500).send(err) : res.status(200).send('Image uploaded')
        })        
    }
}