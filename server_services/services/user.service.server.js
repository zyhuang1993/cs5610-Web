module.exports=function (app) {
  var users = [
    {userId: '123', username: 'alice', password: 'alice', firstName: 'Alice', lastName: 'Wonder'},
    {userId: '234', username: 'bob', password: 'bob', firstName: 'Bob', lastName: 'Marley'},
    {userId: '345', username: 'charly', password: 'charly', firstName: 'Charly', lastName: 'Garcia'},
    {userId: '456', username: 'jannunzi', password: 'jannunzi', firstName: 'Jose', lastName: 'Annunzi'}
  ];

  app.get('/api/user', findUserByCredentials);
  app.get('/api/user/:userId', findUserById);
  app.put('/api/user/:userId', updateUser);
  app.post('/api/user', createUser);
  app.delete('/api/user/:userId', deleteUser);


  function findUserById(req, res) {
    const userId = req.params.userId;
    const user = users.find((user) => {
      return user.userId === userId;
    });
    res.json(user);
  }

  function createUser(req, res) {
    const user = req.body;
    user.userId = randomId();
    users.push(user);
    res.json(user);

  }


    function findUserByCredentials(req, res) {
      const username = req.query['username'];
      const password = req.query['password'];
      let user = null;
      if (username && password) {
        user = users.find((user) => {
          return user.username === username && user.password === password;
        });
      }
      res.json(user);
    }

    function updateUser(req, res) {
      const userId = req.params.userId;
      const user = req.body;
      for (let i in users) {
        if (users[i].userId === userId) {
          console.log(users[i].firstName);
          users[i].firstName = user.firstName;
          users[i].lastName = user.lastName;
          res.status(200).send(users[i]);
          return;
        }
      }
      res.status(404).send('NOt Found the User');
    }

    function deleteUser(req, res) {
      const userId = req.params.userId;
      for (const i in users) {
        if (users[i].userId === userId) {
          const j = +i;
          users.splice(j, 1);
          break;
        }
      }
    }

    function randomId() {
      const num = Math.floor(Math.random() * 1000) + 1;
      return num.toString();
    }
  };

