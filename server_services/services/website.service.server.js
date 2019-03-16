
module.exports=function (app) {
  var websites = [
    { websiteId: '123', name: 'Facebook', developerId: '456', description: 'Lorem' },
    { websiteId: '234', name: 'Tweeter', developerId: '456', description: 'Lorem' },
    { websiteId: '456', name: 'Gizmodo', developerId: '234', description: 'Lorem' },
    { websiteId: '890', name: 'Go', developerId: '123', description: 'Lorem' },
    { websiteId: '567', name: 'Tic Tac Toe', developerId: '345', description: 'Lorem' },
    { websiteId: '678', name: 'Checkers', developerId: '123', description: 'Lorem' },
    { websiteId: '789', name: 'Chess', developerId: '234', description: 'Lorem' }
  ];

  app.get('/api/website/:websiteId', findWebsiteById);
  app.get('/api/user/:userId/website', findAllWebsitesByUser);
  app.post('/api/user/:userId/website', createWebsite);
  app.put('/api/website/:websiteId', updateWebsite);
  app.delete('/api/website/:websiteId', deleteWebsite);

  function findWebsiteById(req, res) {
    const websiteId = req.params.websiteId;
    const website = websites.find((website) => {
      return website.websiteId === websiteId;
    });
    res.json(website);
  }

  function createWebsite(req, res) {
    const website = req.body;
    const userId = req.params.userId;
    website.websiteId = randomId();
    website.developerId = userId;
    websites.push(website);

    res.json(website);
  }

  function findAllWebsitesByUser(req, res) {
    const userId = req.params.userId;
    res.json(getWebsitesForUser(userId));
  }

  function getWebsitesForUser(userId) {
    return websites.filter((website) => {
      return website.developerId === userId;
    })
  }

  function updateWebsite(req, res) {
    const userId = req.params.userId;
    const websiteId = req.params.websiteId;
    const website = req.body;
    for (const i in websites) {
      if (websites[i].websiteId === websiteId) {
        websites[i].name = website.name;
        websites[i].description = website.description;
        res.status(200).send(websites[i]);
      }
    }
    res.status(404).send('Not found the websites');
  }

  function deleteWebsite(req, res) {
    const websiteId = req.params.websiteId;
    for (const i in websites) {
      if (websites[i].websiteId === websiteId) {
        const j = +i;
        websites.splice(j, 1);
        break;
      }
    }
    res.json(websites);
  }


  function randomId() {
    const num = Math.floor(Math.random() * 1000) + 1;
    return num.toString();
  }
};
