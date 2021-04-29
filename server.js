const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routesUrl = require('./routes/routes')
const cors = require('cors')
const path = require("path")

const PORT = process.env.PORT || 4000


dotenv.config()
mongoose.connect(process.env.MONGODB_URI || process.env.DATABASE_ACCESS, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
    }, () => {
        console.log('database connected')
    });



app.use(express.json())
app.use(cors())
app.use("/api", routesUrl)

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, '../build')))
}

app.listen(PORT, () => {
    console.log("Server up and Running")
})