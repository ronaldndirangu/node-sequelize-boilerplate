const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const server = http.createServer(app);
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));


app.use('*', (req, res) => {
  res.status(404).json({
    message: 'Url Not Found'
  })
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
