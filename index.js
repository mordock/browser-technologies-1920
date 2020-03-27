const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
   res.render('prePage');
});

app.get('/form', (req, res) => {
  const completeUrl = req.protocol + '://' + req.get('host') + req.originalUrl;

   res.render('form', {
    query: req.query,
    url: completeUrl
  });
});

app.get("/overzicht", function(req, res) {
    const completeUrl = req.protocol + '://' + req.get('host') + req.originalUrl;

    res.render("overzicht", {
      query: req.query,
      url: completeUrl,
      urlExtension: req.originalUrl
    });
  });

  const PORT = process.env.PORT || 5000;

  app.listen(PORT, () => console.log('server started on port: ' + PORT));