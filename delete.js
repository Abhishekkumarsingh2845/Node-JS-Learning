const dbc=require('./mongodb');

const dee=async ()=> {
    
    let data=await dbc();
    let result=await data.deleteOne(
        {class:99}
)
    console.warn(result);
}

dee();