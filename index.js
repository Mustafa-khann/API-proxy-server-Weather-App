const express = require('express');
const cors = require('cors');
require('dotenv').config()

const PORT = process.env.PORT || 5000;

const app = express();

// route
app.use('/api', require('./routes'))
// Use Cors(Cross Origin Policy)
 app.use(cors());
 

 app.listen(PORT, () => {
     console.log(`Server running on port : ${PORT}`);
 })