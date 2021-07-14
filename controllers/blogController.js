const express = require('express');
const router = express.Router();
const connection = require('../models/connection');
const Blog = require('../models/blog');

router.get('/' , (request , response)=>{
    Blog.find((error , docs)=>{
        if(!error){
            response.render('home' , {data: docs});
        }else{
            console.log('There was an error while fetching the data');
        }
    });
});

router.post('/' , (request , response)=>{
    const blog = new Blog();
    blog.name = request.body.name;
    blog.imageURL = request.body.imgUrl;
    blog.description = request.body.description;
    blog.save((error , doc)=>{
        if(!error){
            console.log('Data inserted successfully');
            response.redirect('/campgrounds');
        }else{
            console.log('There was an error while inserting the data');
        }
    });
});

router.get('/delete/:id' , (request , response)=>{
    Blog.findByIdAndRemove(request.params.id , (error , doc)=>{
        if(!error){
            console.log('Deleted Successfully');
            response.redirect('/campgrounds');
        }else{
            console.log("There was an error while deleting");
        }
    });
})

router.get('/update/:id' , (request , response)=>{
    Blog.findById(request.params.id , (error , doc)=>{
        if(!error){
            response.render('update' , {data: doc});
        }else{
            console.log("There was an error while trying to get data for updation");
        }
    });
});

router.post('/update' , (request , response)=>{
    Blog.findOneAndUpdate({_id: request.body.id} , request.body , {new: true} , (error,doc)=>{
        if(!error){
            console.log("Updation Successfull");
            response.redirect('/campgrounds');
        }else{
            console.log("There was an error while updating the record");
        }
    })
});

module.exports = router;