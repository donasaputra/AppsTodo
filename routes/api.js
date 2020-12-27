// const express = require ('express');
// const router = express.Router();
// const Todo = require('../models/user');

// router.get('/todos', (req, res, next) => {

//   //this will return all the data, exposing only the id and action field to the client
//   Todo.find({}, 'action')
//     .then(data => res.json(data))
//     .catch(next)
// });

// router.post('/todos', (req, res, next) => {
//   if(req.body.action){
//     Todo.create(req.body)
//       .then(data => res.json(data))
//       .catch(next)
//   }else {
//     res.json({
//       error: "The input field is empty"
//     })
//   }
// });

// router.delete('/todos/:id', (req, res, next) => {
//   Todo.findOneAndDelete({"_id": req.params.id})
//     .then(data => res.json(data))
//     .catch(next)
// })

// module.exports = router;

const express = require ('express');
const router = express.Router();
const todos = require("../controller/action.controller.js");


// Create a new Customer
router.post("/todos", todos.create);
  
// Retrieve all Customers
router.get("/todos", todos.findAll);

// Delete a Customer with customerId
router.delete("/todos/:id", todos.delete);


module.exports =router;
