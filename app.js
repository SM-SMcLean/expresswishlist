const express = require('express');
const morgan = require('morgan');
const path = require('path');
const PORT = 3000;

const wishlist = [
    { "item": "Playstation 5" },
    { "item": "Some Science Fiction Novels"},
    { "item": "Cadbury's Selection Box"},
    { "item": "Super Slinky Guitar Strings"}
];

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('tiny'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { data: wishlist });
});
app.listen(PORT, (err) => {
    if (err) return console.log(err);
    console.log(`Express listening on port ${PORT}`);
});