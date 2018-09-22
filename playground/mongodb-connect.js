const {MongoClient,ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log('Unable to connect to server.');
  }
  console.log('Connected to mongodb');

  db.collection('Todos').findOneAndDelete({completed:true}).then((res)=>{console.log(res);}).catch((err)=>{console.log(err);});

  // db.collection('Todos').find().toArray().then((docs)=>{
  //   console.log(docs);
  // }).catch((err)=>{console.log(err);});

  // db.collection('Todos').insertOne({
  //   _id:new ObjectId(),
  //   text:'Something to do',
  //   completed: false
  // },(err,result)=>{
  //   if(err){
  //     return console.log(err);
  //   }
  //   console.log(result.ops[0]._id);
  // });
  db.close();

});
