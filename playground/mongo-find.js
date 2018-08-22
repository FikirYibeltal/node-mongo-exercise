//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,objectID}=require('mongodb');
const url='mongodb://localhost:27017/TodoApp';
MongoClient.connect(url,(err,db)=>{
    if(err){
        return console.log('unable to connect to mongodb');
    }
    console.log('connected to mongo database');
    // db.collection('Users').find({name:'fikir Yibeltal'}).toArray().then((docs)=>{
    //     console.log(JSON.stringify(docs,undefined,2));
    // },(err)=>{
    //     console.log('unable to find the collection');
    // })
    db.collection('Users').find().count().then((count)=>{
        console.log(`Users count: ${count}`);
    },(err)=>{
        console.log('unable to find the collection');
    })
    db.close();
});