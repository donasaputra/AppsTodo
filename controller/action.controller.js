const todo = require("../sequelize.js");

exports.create = (req, res) => {
    // Validate request
    if (!req.body.action) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a Tutorial
    const action = {
      action : req.body.action
    };
  
    // Save Tutorial in the database
    todo.create(action)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Action"
        });
      });
};

exports.findAll = (req, res) => {
todo.findAll({ where: null })
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving tutorials."
    });
  });
};

exports.delete = (req, res) => {
const id = req.params.id;
todo.destroy({
  where: { _id: id }
})
.then(num => {
  if (num == 1) {
    res.send({
      message: "Action was deleted successfully!"
    });
  } else {
    res.send({
      message: `Cannot delete Action with id=${id}. Maybe Action was not found!`
    });
  }
})
.catch(err => {
  res.status(500).send({
    message: "Could not delete Action with id=" + id
  });
});
};
