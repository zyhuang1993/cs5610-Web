
module.exports=function (app) {
  const baseUrl = 'https://webdev-ziyan.herokuapp.com';
  var widgets = [
    { widgetId: '123', widgetType: 'HEADER', pageId: '345', size: 20,
      text: 'London terror attack: Police fired \'unprecedented\' number of rounds', width: undefined, url: undefined},
    { widgetId: '234', widgetType: 'IMAGE', pageId: '345', size: undefined, text: 'Image', width: '100%',
      url: 'http://i2.cdn.cnn.com/cnnnext/dam/assets/170604130220-41-london-bridge-incident-0604-gallery-exlarge-169.jpg'},
    { widgetId: '345', widgetType: 'YOUTUBE', pageId: '345', size: undefined, text: 'Myvideo', width: '90%',
      url: 'https://www.youtube.com/embed/ZwKhufmMxko'},
  ];

  var multer = require('multer');
  var upload = multer({dest: __dirname+'/../../src/assets/uploads'});

  app.get('/api/widget/:widgetId', findWidgetById);
  app.get('/api/page/:pageId/widget', findAllWidgetsByPage);
  app.post('/api/page/:pageId/widget', createWidget);
  app.put('/api/widget/:widget', updateWidget);
  app.delete('/api/widget/:widget', deleteWidget);

  app.get('/api/page/:pageId/widget', reorderWidgets);

  app.post('/api/upload', upload.single('myFile'), uploadImage);

  function findWidgetById(req, res) {
    const widgetId = req.params.widgetId;
    const widget = widgets.find((widget) => {
      return widget.widgetId === widgetId;
    });
    res.json(widget);
  }

  function createWidget(req, res) {
    const pageId = req.params.pageId;
    const widget = req.body;
    widget.widgetId = randomId();
    widget.pageId = pageId;
    widgets.push(widget);
    res.json(widget);
  }

  function findAllWidgetsByPage(req, res) {
    const pageId = req.params.pageId;
    res.json(getWidgetsForPage(pageId));
  }

  function updateWidget(req, res) {
    const widgetId = req.params.widgetId;
    const widget = req.body;

    for (const i in widgets) {
      if (widgets[i].widgetId === widgetId) {
       switch (widgets[i].widgetType) {
         case 'HEADER':
           widgets[i].text = widget.text;
           widgets[i].size = widget.size;
           break;

         case 'YOUTUBE':
           widgets[i].text = widget.text;
           widgets[i].url = widget.url;
           widgets[i].width = widget.width;
           break;

         case 'IMAGE':
           widgets[i].text = widget.text;
           widgets[i].url = widget.url;
           widgets[i].width = widget.width;
           break;
       }
       res.status(200).send(widgets[i]);
      }
    }
    res.status(404).send('Not Found the Widgets')
  }

  function deleteWidget(req, res) {
    const widgetId = req.params.widgetId;
    for (const i in widgets) {
      if (widgets[i].widgetId === widgetId) {
        const j = +i;
        widgets.splice(j, 1);
        break;
      }
    }
    res.json(widgets);
  }

  function getWidgetsForPage(pageId) {
    return widgets.filter((widget) => {
      return widget.pageId === pageId;
    })
  }

  function reorderWidgets(req, res) {
    var startIndex = parseInt(req.query["start"]);
    var endIndex = parseInt(req.query["end"]);

    array_swap(widgets, startIndex, endIndex);
    res.sendStatus(200);
  }

  function randomId() {
    const num = Math.floor(Math.random() * 1000) + 1;
    return num.toString();
  }

  function uploadImage(req, res) {
    var userId = req.body.userId;
    var websiteId = req.body.websiteId;
    var pageId = req.body.pageId;

    var widgetId = req.body.widgetId;
    var width = req.body.width;
    var myFile = req.file;

    if (myFile === undefined) {
      res.status(200).send('no file');
      return;
    }

    var filename      = myFile.filename;     // new file name in upload folder
    var path          = myFile.path;         // full path of uploaded file
    var destination   = myFile.destination;  // folder where file is saved to
    var size          = myFile.size;
    var mimetype      = myFile.mimetype;


    var widget = { url: "../../src/assets/uploads/"+filename};

    for (let i = 0; i < widgets.length; i++) {
      if (widgets[i]._id === widgetId) {
        widget = widgets[i];
      }
    }
    widget.url = '../../src/assets/uploads' + filename;

    res.status(200);
  }

  function array_swap(arr, old_index, new_index) {
    while (old_index < 0) {
      old_index += arr.length;
    }
    while (new_index < 0) {
      new_index += arr.length;
    }
    if (new_index >= arr.length) {
      var k = new_index - arr.length + 1;
      while (k--) {
        arr.push(undefined);
      }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
  };


};
