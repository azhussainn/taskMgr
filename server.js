const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routesUrl = require('./routes/routes')
const cors = require('cors')
const path = require("path")

const PORT = process.env.PORT || 5000


dotenv.config()

mongoose.connect(process.env.MONGODB_URI, {
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

//serve static assets

if(process.env.NODE_ENV === 'production') {
    // set static folder
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }


app.listen(PORT, () => {
    console.log("Server up and Running on " + PORT)
})