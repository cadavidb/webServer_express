const express = require('express');
const app = express();
const hbs = require('hbs');
app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + '/views/parciales')
app.set('view engine', 'hbs');
const port = process.env.PORT || 3000;
app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'Brayan Cadavid',
        year: new Date().getFullYear()
    })
});

app.get('/sesion.hbs', (req, res) => {

    res.render('sesion')
});



app.listen(port, () => {
    console.log('ejecutandose el servidor en el puerto ' + port);
});