const compression = require('compression');
const path        = require('path');
const express     = require('express');
const app         = express();


app.use(compression());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use("/", express.static(path.join(__dirname, './')));
app.use("/", express.static(path.join(__dirname, './src')));
app.use("/", express.static(path.join(__dirname, './dist')));

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/dist/index.html');
})


app.listen(3000, () => {
	console.log('Server is running! localhost:' + 3000);
})