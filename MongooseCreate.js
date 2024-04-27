const mongoose=require('mongoose');

const main=async()=> {
    await mongoose.connect('mongodb://localhost:27017/sample');
    const schema=new mongoose.Schema({
        name:String,
        age:Number,
        email:String,
        });
        const model =mongoose.model('s1',schema);
        let data =new model({name:'xx',age:12,email:'sinj@gmail.com'});
        let result=await data.save();
        console.log(result);
}
main();