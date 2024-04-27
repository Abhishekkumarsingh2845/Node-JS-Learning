const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/sample');
const productSchema = new mongoose.Schema({
    name: String,
   age:Number,
});
const updateInDB =async  () => {
    const Product = mongoose.model('s1', productSchema);
    let data =await  Product.updateOne(
        { name: "John" },
        {
            $set: { age:3 }
        }
    )
    console.log(data)
}
updateInDB();