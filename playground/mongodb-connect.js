const MongoClient = require('mongodb').MongoClient;

// MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
//   if(err){
//     return console.log('Could not connect')
//   }
//   console.log("Conencted to mongo db server");
//   db.collection('Todos').insertOne({
//       text : 'Something to do',
//       completed : false
//     },(err, result)=>{
//       if(err){
//         return console.log('Unable to insert todo',err)
//       }
//       console.log(JSON.stringify(result.ops,undefined,2));
//     });
//
//   db.close();
// });

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if (err){
    return console.log('Unable to connect to server')
  }
  console.log('Connected to server')
  db.collection('Users').insertOne({
  name: 'Shivendra',
  age:24,
  location: 'Pune, Maharashtra 411057'
},(err,result)=>{
  if(err){
    return console.log('Unable to insert record in Users collection')
  }
  console.log(JSON.stringify(result.ops,undefined,2));
});
db.close();
});
