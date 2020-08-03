const fs = require('fs')

const createFolder = (email) => {
    const dirPath = `/src/assets/images/${email}`

    fs.mkdirSync(process.cwd() + dirPath, {recursive: true}, (error)=>{
        error ? console.log("error is ", error) : 'success'
    })
}
exports.createFolder=createFolder