const express = require('express')

const app = express();
const port = process.env.PORT || 3001;

app.get('/hello', (req, res) => {
	res.json('Hello World!, from Jabba the script!!');
});

app.get('/.well-known/test.json', (req, res) => {
	res.set('Content-Length', '666');
	res.json({"oh": "really"});
});


app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));
