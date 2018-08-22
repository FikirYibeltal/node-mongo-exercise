//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,objectID}=require('mongodb');
const url='mongodb://localhost:27017/TodoApp';
MongoClient.connect(url,(err,db)=>{
    if(err){
        return console.log('unable to connect to mongodb');
    }
    console.log('connected to mongo database');
    // db.collection('Todos').insertOne({
    //     text:'first inserted item',
    //     complete:false
    // },(err,results)=>{
    //     if(err){
    //         return console.log('unable to insert the item',err);
    //     }
    //     console.log(JSON.stringify(results,undefined,2));
    // })
    db.collection('Users').insertOne({
        name:'fikir',
        age:23,
        location:'Addis Ababa'
    },(err,results)=>{
        if(err){
            return console.log('unable to insert the item',err);
        }
        //console.log(JSON.stringify(results.ops,undefined,2));
        console.log(results.ops[0]._id.getTimestamp());
    });
    db.close();
});