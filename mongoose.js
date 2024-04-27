const express = require('express');
require("./MongooseConfig");
const Product = require("./MongooseProduct");
const app = express();

app.use(express.json());
app.post("/create", async (req, resp) => {
    let data = new Product(req.body);
    const result = await data.save();
    console.log(result);
    resp.send(result);
});

app.listen(5000);