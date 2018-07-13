//Twój kod
//Twój kod

const express = require('express');
const app = express();

app.use(express.static('./public/zadanieDnia/'));

let counter_yes = 0
let counter_no = 0

function voteYesNo(address, param) {
	app.get(address, (req, res) => {
		param += 1;
		res.send('Dziękujemy za głos!');
	});
};

voteYesNo('/vote/yes', counter_yes);
voteYesNo('/vote/no', counter_no);

 
app.get('/votes/check', (req, res) => {
	
	res.send(`Głosy na tak ${counter_yes}, głosy na nie ${counter_no}`);
});


app.listen(3000, () => {
	console.log('Serwer uruchomiony na porcie 3000');
});