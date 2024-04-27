const dbc=require('./mongodb');

const update=async ()=> {
    
    let data=await dbc();
    const result=await data.updateOne(
        {class:99},{
        $set:{class:33}
    }
       
);
    console.log(result);
}

update();