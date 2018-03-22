const  {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if (err){
    return console.log('Unable to connect to server')
  }
  console.log('Connected to server')

// db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result)=>{
//   console.log(result);
// });


// db.collection('Todos').deleteOne({text:'Eat lunch'}).then((resul)t=>{
//
//   console.log(result);
// });

db.collection('Todos').findOneAndDelete({completed:true}).then((result)=>{
  console.log(result);
});

});
