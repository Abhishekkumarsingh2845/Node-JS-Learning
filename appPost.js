const db=require('./mongodb');
const express=require('express');
const app=express();
app.use(express.json());
 app.post('/',async(req,resp)=> {

    
    
    console.log(req.body);
    resp.send({name:'po'});
 });
app.listen(3000);