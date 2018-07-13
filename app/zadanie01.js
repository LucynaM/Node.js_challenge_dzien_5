//Twój kod

const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send('hello world');
});

app.get('/add/:num1/:num2', (req, res) => {
	const num1 = parseInt(req.params.num1, 10);
	const num2 = parseInt(req.params.num2, 10);
	const sumNumbers = num1 + num2;
	res.send('Wynik: ' + sumNumbers);
});

app.listen(3000, () => {
	console.log('Serwer uruchomiony na porcie 3000');
});