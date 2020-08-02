const axios = require("axios")

const uploadFile = () => {
    const {user_id} = req.params
    if(!req.files) {
        return res.status(400).send('Image not uploaded')
    }

    let image = req.files.image
    let imageFolder = path.join(__dirname, '../../', 'src/assets/images')
    let uploadPath = `${imageFolder}/${image.name}` 
    
    console.log(uploadPath)

    image.mv(uploadPath, err=> {
        err ? res.status(500).send(err) : res.status(200).send('Image uploaded')
    })        

}
exports.uploadFile=uploadFile