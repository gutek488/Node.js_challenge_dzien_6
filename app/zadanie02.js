const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const app = express();
app.use(cookieParser());
app.use(bodyParser.urlencoded());
app.use(express.static('./public/zadanie02/'));


app.post('/cookie/set', (req, res) => {
    const {name} = req.body;
    res.cookie('name', `${name}`, {
        maxAge : 2628000000,
    });
    res.send('Zapisano imię!');
});



app.get('/cookie/show', (req, res) => {
    const myCookie = req.cookies.name;
    res.send('Zapisane imię to: ' + myCookie);
});

app.get('/cookie/test', (req, res) => {
    const myCookie = req.cookies.name;
    if (myCookie === undefined) {
        res.send("Imię nie zostało zapisane.")
    } else {
        res.send("Imię zostało zapisane")
    }

});



app.listen(3000, () => {
    console.log('Serwer ustawiony na porcie 3000');
});