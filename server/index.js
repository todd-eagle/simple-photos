require('dotenv').config();
const cors = require('cors')
const fileUpload = require('express-fileupload');
const express = require('express');
const session = require('express-session');
const helmet = require('helmet')
const massive = require('massive');
const authCrtl = require('./controllers/auth-controller')
const dataCrtl = require('./controllers/data-controller')

const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env;

const app = express();

app.use(express.static("src"))
app.use(helmet())
app.use(cors())
app.use(express.json());
app.use(fileUpload());

app.use(
    session({
        resave: false,
        saveUninitialized: true,
        cookie: { maxAge: 1000 * 60 * 60 * 24 * 14 },
        secret: SESSION_SECRET        
    })
)

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then( db => {
    app.set('db', db)
    console.log('Connected to db')
    app.listen( SERVER_PORT, () => console.log(`Connected to port ${SERVER_PORT}`))
}).catch(err=>console.log(err))

app.post('/api/auth/user', authCrtl.login)
app.get('/api/auth/user', authCrtl.grabUserSession)
app.delete('/api/auth', authCrtl.logout)
app.post('/api/auth', authCrtl.register)

app.get('/api/photos/:user_id', dataCrtl.getPhotoData)
app.get('/api/allphotos', dataCrtl.getAllPhotoData)
app.post('/api/photos/:user_id', dataCrtl.insertPhotoData)
app.delete('/api/photos/:id', dataCrtl.deletePhotoData)
app.put('/api/photos/:id', dataCrtl.updatePhotoData)
app.post('/api/files', dataCrtl.deleteImageFile)

app.post('/api/users', dataCrtl.insertUserData)
app.get('/api/users/:user_id', dataCrtl.getUserData)
app.put('/api/users', dataCrtl.updateUserData)

// app.post('/api/upload', dataCrtl.uploadFile)
app.post('/api/upload/:id/:folder_id', dataCrtl.uploadFile)