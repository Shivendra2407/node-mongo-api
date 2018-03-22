const  {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if (err){
    return console.log('Unable to connect to server')
  }
  console.log('Connected to server')

db.collection('Users').findOneAndUpdate({
  _id: new ObjectID ('5aae07cf005f3b1b446966fc')
},
{
  $set:{
    name:'Andrew',
  },
  $inc: {
    age:-1,
  }
},
{
    returnOriginal:false
}
).then((result)=>{
  console.log(result);
});

});
