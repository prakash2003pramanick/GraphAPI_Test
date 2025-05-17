// server.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const code = req.query?.code;

  // Print incoming URL
  console.log(`Incoming Request: ${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`);

  // Debug: query and body
  console.log("req.query", req.query);
  console.log("req.body", req.body);
  console.log("Authorization code:", code);

  res.send('Code received. You can now use it in Postman.');
});
 

app.listen(3000, () => console.log('Listening on http://localhost:3000'));
