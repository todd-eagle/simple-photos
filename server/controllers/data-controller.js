const path = require('path')
const deleteFile = require('./../upload/deleteFile')

module.exports = {
    insertPhotoData: async(req, res) => {
        const {title, tags, folder_id} = req.body
        const {user_id} = req.params
        const db = req.app.get('db')
        const dataInserted = await db.photos.insert({user_id, title, tags, folder_id})
        //console.log('dataInserted ', dataInserted)
        dataInserted ? res.status(200).send(dataInserted) :
        res.status(500).send(err)
    },
    getPhotoData: async(req, res) => {
        const db = req.app.get('db')
        const data = await db.photos.find(req.params, {order:[{field: 'id',direction: 'desc'}]})
        data ? res.status(200).send(data) :
        res.status(500).send(err)
    },
    getAllPhotoData: async(req, res) => {
        const db = req.app.get('db')
        const data = await db.photos.find()
        // console.log(data)
        data ? res.status(200).send(data) :
        res.status(500).send(err)
    },
    deleteImageFile: async(req, res) => {
       const {link} = req.body
    //    console.log("req.body ", req.body)
       const fileDeleted = await deleteFile.deleteFile(link)
       fileDeleted ? res.status(200).send('Image deleted') : res.status(500).send('Server error: file not deleted')
    },
    deletePhotoData: async(req, res) => {
        const db = req.app.get('db')
        const deletedData = await db.photos.destroy(req.params)
        deletedData ? res.status(200).send('Data deleted') :
        res.status(500).send(err)
    },
    updatePhotoData: async(req, res) => {
        const {id} = req.params
        // console.log("req.params ", req.params);
        const db = req.app.get('db')
        const updatedPhotoData = await db.photos.update(req.params, req.body)
        updatedPhotoData ? res.status(200).send('Data updated') :
        res.status(500).send(err)
    },
    searchPhotoData: async(req, res) => {
        // console.log("req.params ", req.params);
        const db = req.app.get('db')
        const searchedData = await db.photos.find(req.body, req.body)
        searchedData ? res.status(200).send('Data updated') :
        res.status(500).send(err)
    },
    getUserData: async(req, res) => {
        const db = req.app.get('db')
        const userData = await db.account.find(req.params)
        userData ? res.status(200).send(userData) :
        res.status(500).send(err)
    },
    insertUserData: async(req, res) => {
        const db = req.app.get('db')
        const insertedData =  await db.account.insert(req.body)
        insertedData ? res.status(200).send('User data inserted') :
        res.status(500).send(err)
    },
    updateUserData: async(req, res) => {
        const db = req.app.get('db')
        // console.log (req.params, req.body)
        const updatedUserData =  await db.account.update(req.params, req.body)
        updatedUserData ? res.status(200).send('User data updated') :
        res.status(500).send(err)
    },
    uploadFile: async(req, res) => {
        const db = req.app.get('db')
        const {id, folder_id} = req.params

        console.log( req.files.image)

        if(!req.files) {
            return res.status(400).send('Image not uploaded')
        }

        let image = req.files.image
        let imageFolder = path.join(__dirname, '../../', 'src/assets/images')
        let uploadPath = `${imageFolder}/${folder_id}/${image.name}` 
        let linkPath = `/assets/images/${folder_id}/${image.name}`
        
        // console.log(uploadPath)

        const updatedImageLink = await db.photos.save({id: id, link: linkPath})

        image.mv(uploadPath, err=> {
            err ? res.status(500).send(err) : res.status(200).send('Image uploaded')
        })        
    },
    uploadProfileImages: async(req, res) => {
        const db = req.app.get('db')
        const {user_id, folder_id} = req.params
        console.log("folder_id ", folder_id)
     // const imageUploaded =  await db.profile.insert(req.body)
    },
    insertProfileData: async(req, res) => {
        const db = req.app.get('db')
        const {user_id} = req.body
       // console.log("req.body ", req.body)

        const profileFound = await db.profile.find({user_id})

        if(profileFound.length === 0){
            if(insertedData = await db.profile.insert(req.body)){
                return res.status(200).send("Data inserted")
            } else {
                return res.status(500).send("Insert failed")
            }
        }else {
            res.status(409).send('Profile exists')
        }  
    },
    updateProfileData: async(req, res) => {
        const db = req.app.get('db')
        const {user_id} = req.body

        const updatedData = await db.profile.update({user_id}, req.body)
        updatedData ? res.status(200).send("Data updated") : 
            res.status(500).send('Server error')
    } 
}