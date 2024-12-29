const express = require('express');
   const morgan = require('morgan');
   const PORT = 3000;
   const app = express();
   app.use(morgan('tiny'));
   app.set('view engine', 'ejs');
   app.get('/', (req, res) => {
       res.render('index');
   });
   app.listen(PORT, (err) => {
       if (err) return console.log(err);
console.log(`Express listening on port ${PORT}`); });