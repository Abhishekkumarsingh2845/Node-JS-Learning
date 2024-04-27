const db=require('./mongodb');
const express=require('express');
const app=express();
app.use(express.json());
 app.put("/",async(req,resp)=> {

    
    console.log(req.body);
   
    resp.send({name:'pooo'});
 });
app.listen(3000);