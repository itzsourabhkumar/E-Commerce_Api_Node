const express = require('express'); // package to get the express object constructor
const bodyParser = require('body-parser');

const app = express(); // This function returns an express object ehich has the capabilities to handle server side requests

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const PORT = 3000; //this will be the port on our local system where server will run

app.listen(PORT,()=>{ //listen function register the app for the port
    console.log(`Server started on Port ${PORT}`);
});
