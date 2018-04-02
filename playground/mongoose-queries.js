
const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5ac24cb7f0beaee015d2181711';
//

// if(!ObjectID.isValid(id)){
// return   console.log('Not a valid id',id);
// }


// Todo.find().then((todos)=>{
//   console.log('Todos',todos);
// });
//


// Todo.findOne({
//   _id: id
// }).then((todo)=>{
//   console.log('Todo',todo);
// });
//


// Todo.findById(id).then((todo)=>{
//   if(!todo){
//     return console.log('No todo matches with id queried');
//   }
//   console.log('Todo by ID',todo);
// }).catch((e)=>{console.log(e)});


// var text = "First todo";
// var query = Todo.findOne({_id:id});
// query.select('completed');
// query.exec((err, completed)=>{
//   if(err){
//     return console.log("nothin",err);
//   }
//   console.log('completed',completed);
// });
id = '5ab652226f094b9c1471d928';
User.findById(id).then((u)=>{
  if(!u){
    return console.log("no such user");
  }
  console.log(JSON.stringify(u,undefined,2));
}).catch((e)=>console.log(e));
