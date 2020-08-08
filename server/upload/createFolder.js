const fs = require('fs')

const createFolder = (folder) => {
    const dirPath = `/src/assets/images/${folder}`

    fs.mkdirSync(process.cwd() + dirPath, {recursive: true}, (error)=>{
        error ? console.log("error is ", error) : 'success'
    })
}
exports.createFolder=createFolder