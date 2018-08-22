//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');


const url='mongodb://localhost:27017/TodoApp';

MongoClient.connect(url,(err,db)=>{
    if(err){
        return console.log('unable to connect to mongodb');
    }
    console.log('connected to mongo database');
     db.collection('Users').findOneAndUpdate({
         _id:new ObjectID('5b780450c4b5fe73f7f0e37f')
        },
        {
            $set:{
                age:34
            }
        },
        {
            returnOriginal:false
        }).then((result)=>{
         console.log(result);
    });
    db.close();
});