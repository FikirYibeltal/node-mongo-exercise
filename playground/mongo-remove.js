//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,objectID}=require('mongodb');
const url='mongodb://localhost:27017/TodoApp';
MongoClient.connect(url,(err,db)=>{
    if(err){
        return console.log('unable to connect to mongodb');
    }
    console.log('connected to mongo database');
     db.collection('Users').deleteMany({name:'fikiry'}).then((result)=>{
         console.log(result);
    },(err)=>{
        console.log('unable to find the collection');
    })
    db.close();
});