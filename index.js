
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {

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

app.listen(port, () => console.log(`Example app listening on port ${port}!`));