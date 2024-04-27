const dbc=require('./mongodb');

const insert=async ()=> {
    
    const db=await dbc();
    const result=await db.insert(
        {class:99,name:'aa',age:22}
       
);
    console.log(result);
}

insert();