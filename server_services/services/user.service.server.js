module.exports=function (app) {

  app.get('/api/user', findUserByCredentials);
  app.get('/api/user/:userId', findUserById);
  app.put('/api/user/:userId', updateUser);
  app.post('/api/user', createUser);
  app.delete('/api/user/:userId', deleteUser);

  var userModel = require('../model/user/user.model.server');


  function findUserById(req, res) {
    const userId = req.params.userId;
    userModel.findUserById(userId)
      .then((user) => {
          res.json(user);
      }, (err) => {
        res.status(404).send(err);
      });
  }


  function createUser(req, res) {
    const user = req.body;
    userModel
      .createUser(user)
      .then((user) => {
        res.json(user);
      }, (error) => {
        console.log("create user error: " + error);
        res.status(404).send(error);
      });
  }

    function findUserByCredentials(req, res) {
      const username = req.query['username'];
      const password = req.query['password'];
      userModel.findByCredential(username,password)
        .then((user) => {
            res.json(user);
        }, (err) => {
          res.status(404).send(err);
        });
    }


    function updateUser(req, res) {
      const userId = req.params.userId;
      const user = req.body;
      userModel.updateUser(userId,user)
        .then((user) => {
          res.json(user);
        }, (err) => {
          res.status(404).send(err);
        });
  }



    function deleteUser(req, res) {
      const userId = req.params.userId;
      userModel.deleteUser(userId)
        .then((data) => {
          res.json(data);
        }, (err) => {
          res.status(404).send(err);
        });
    }

  };

