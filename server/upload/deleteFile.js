const fs = require('fs')

const deleteFile = (path) => {
    let image = `/src/${path}`
    try {
        fs.unlinkSync(process.cwd() + image)
        return true
    } catch (error) {
        console.log(error)
    }
    return false
}

exports.deleteFile=deleteFile