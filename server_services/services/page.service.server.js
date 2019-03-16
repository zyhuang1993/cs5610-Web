module.exports=function (app) {

  var pages = [
    { pageId: '345', name: 'Post 1', websiteId: '890', description: 'Lorem' },
    { pageId: '456', name: 'Post 2', websiteId: '890', description: 'Lorem' },
    { pageId: '567', name: 'Post 3', websiteId: '345', description: 'Lorem' },
    { pageId: '678', name: 'Post 4', websiteId: '456', description: 'Lorem' },
    { pageId: '789', name: 'Post 5', websiteId: '567', description: 'Lorem' },
    { pageId: '890', name: 'Post 6', websiteId: '678', description: 'Lorem' },
    { pageId: '901', name: 'Post 6', websiteId: '789', description: 'Lorem' }
  ];

  app.get('/api/page/:pageId', findPageById);
  app.get('/api/website/:websiteId/page', findAllPagesByWebsite);
  app.post('/api/website/:websiteId/page', createPage);
  app.put('/api/page/:pageId', updatePage);
  app.delete('/api/page/:pageId', deletePage);

  function findPageById(req, res) {
    const pageId = req.params.pageId;
    const page = pages.find((page) => {
      return page.pageId === pageId;
    });
    res.json(page);
  }

  function createPage(req, res) {
    const page = req.body;
    const websiteId = req.params.websiteId;
    page.pageId = randomId();
    page.websiteId = websiteId;
    pages.push(page);

    res.json(page);
  }

  function findAllPagesByWebsite(req, res) {
    const websiteId = req.params.websiteId;
    res.json(getPagesForWebsite(websiteId));

  }

  function updatePage(req, res) {
    const pageId = req.params.pageId;
    const page = req.body;

    for (const i in pages) {
      if (pages[i].pageId === pageId) {
        pages[i].name = page.name;
        pages[i].description = page.description;
        res.status(200).send(pages[i]);
        return;
      }
    }
   res.stat(404).send('Not Found the Pages');
  }

  function deletePage(req, res) {
    const pageId = req.params.pageId;
    for (const i in pages) {
      if (pages[i].pageId === pageId) {
        const j = +i;
        pages.splice(j, 1);
        break;
      }
    }
    res.json(pages);
  }

  function getPagesForWebsite(websiteId) {
    return pages.filter((page) => {
      return page.websiteId === websiteId;
    })
  }

  function randomId() {
    const num = Math.floor(Math.random() * 1000) + 1;
    return num.toString();
  }
};
