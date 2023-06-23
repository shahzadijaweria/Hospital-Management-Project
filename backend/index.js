const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const cors = require('cors')
const Routes = require('./routes/index')
require('dotenv').config()
const mongoose = require('./config/mongo')
const port = process.env.PORT || 3001
const connection = mongoose.connection;

connection.once("open", () => {
    console.log("MongoDB Database connection established sucessfully")
})

let allowedOrigins = [/localhost:\d{4}$/];
if (process.env.ALLOWED_CORS) {
    allowedOrigins = allowedOrigins.concat(process.env.ALLOWED_CORS.split(','));
}

const corsConfig = {
    origin: allowedOrigins,
    maxAge: 86400, // NOTICE: 1 day
    credentials: true
};


app.use(cors(corsConfig));
app.use(bodyParser.json({ limit: '20mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.listen(port, () => {
    console.log(`server will be connected this port ${port}`)
})

app.use('/api', Routes);