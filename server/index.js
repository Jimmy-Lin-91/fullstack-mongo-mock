// Express Server
// FIX ME :(
  const express = require('express');
  const path = require('path');
  const router = require('./router.js');
  const port = 3000;
  const server = express();
  const morgan = require('morgan');
  const bodyParser = require('body-parser');
  server.use(bodyParser.json());
  server.use(morgan('dev'));
  server.use(express.static(path.join(__dirname, '/../client/dist')));

  // server.get('/name', (req, res) => {
  //   res.status(200).send('This is your get request, modify this file to use your router!')
  // })

  // server.post('/name', (req, res) => {
  //   res.status(200).send('This is your post request, modify this file to use your router!')
  // })

  // server.put('/name', (req, res) => {
  //   res.status(200).send('This is your put request, modify this file to use your router!')
  // })

  // server.delete('/name', (req, res) => {
  //   res.status(200).send('This is your delete request, modify this file to use your router!')
  // })
  server.use('/name', router);
  server.listen(port, () => console.log('Connected to port: 3000'))


