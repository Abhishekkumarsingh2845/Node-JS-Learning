const {MongoClient} = require('mongodb')
const url= 'mongodb://localhost:27017';
const databaseName='sample'
const client= new MongoClient(url);

async function getData()
{
    let result = await client.connect();
    db= result.db(databaseName);
    return  db.collection('s1');

}
module.exports=getData;