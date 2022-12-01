const express = require('express');
const userroutes = require('./routes/loginSignup')
const collectionroutes = require('./routes/collection')
const {dbConn} = require('./config/db')
const cors = require('cors');
const app = express();
const port = 3025;

app.use(express.json());
app.use(cors());
app.use(userroutes);
app.use(collectionroutes);
dbConn();

app.listen(port,()=>{
    console.log(`Server listening on port ${port}`);
});
