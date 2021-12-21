const express = require('express');
const app = express();
const PORT = 9094;


app.listen(PORT,()=>{
    console.log('App is Running');
});

app.get('/', (req, res) => {
    res.send('Welcome to Node Express REST API Setup');
});