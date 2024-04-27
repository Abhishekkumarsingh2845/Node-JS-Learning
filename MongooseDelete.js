const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/sample');
const productSchema = new mongoose.Schema({
    name: String,
   age:Number,
});
const deleteInDB = async ()=>{
    const Product = mongoose.model('s1', productSchema);
    let data = await Product.deleteOne({name:'John'})
    console.log(data);

}
deleteInDB();