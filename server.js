require('./models/connection');
const blogController = require('./controllers/blogController');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.urlencoded({extended : true}));

app.set('view engine' , 'ejs');

app.use(express.static(path.join(__dirname , 'public')));

app.use('/campgrounds' , blogController);

app.use((request , response)=>{
    response.status(404).send("404, page not found!")
});

app.listen(3000 , ()=>{
    console.log("listening to port number 3000");
})