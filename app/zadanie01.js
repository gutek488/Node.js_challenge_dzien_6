const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const app = express();
app.use(cookieParser());
app.use(bodyParser.urlencoded());
app.use(express.static('./public/zadanie01/'));


app.post('/wynik', (req, res) => {
    const {num1, num2} = req.body;
    if(parseInt(num1) % parseInt(num2) === 0) {
        res.send(`Liczba ${num1} jest podzielna przez ${num2}`);
    } else {
        res.send(`Liczba ${num1} nie jest podzielna ${num2}`);
    }
});


app.listen(3000, () => {
    console.log('Serwer ustawiony na porcie 3000');
});