const db=require('./mongodb');
const ex=require('express');
const app=ex();
 app.get('/',async(req,resp)=> {

    let data=await db();
    data=await data.find().toArray();
    console.log(data);
    resp.send(data);
 });
app.listen(3000);