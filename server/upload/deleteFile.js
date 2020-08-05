const fs = require('fs')

const deleteFile = (path) => {
    let image = `/src/${path}`
    try {
        fs.unlinkSync(process.cwd() + image)
    } catch (error) {
        console.log(error)
    }

}

exports.deleteFile=deleteFile