const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit')
require('dotenv').config()

const PORT = process.env.PORT || 5000;

const app = express();

const limiter = rateLimit({
    windowMs: 10*60*1000,
    max: 15
})
app.use(limiter)
app.set('trust proxy', 1)

// Set static folder
app.use(express.static('public'))

// route
app.use('/api', require('./routes'))
// Use Cors(Cross Origin Policy)
 app.use(cors());
 

 app.listen(PORT, () => {
     console.log(`Server running on port : ${PORT}`);
 })