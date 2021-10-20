const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const app = express();

dotenv.config({path:'./config.env'});

require('./database/connection');

app.use(express.json());
app.use(cors());

app.use(require('./routes'));

const port = process.env.PORT;
app.listen(port,()=>{
    console.log(`server is running at port number ${port}`);
});

