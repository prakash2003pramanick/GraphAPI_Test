// server.js
const express = require('express');
const app = express();

app.get('*', (req, res) => {
  const code = req.query?.code;

  // Print incoming URL
  const fullUrl = `${req.protocol}://${req.get('host')}${req.originalUrl}`;
  console.log("Full URL:", fullUrl);

  // Debug: query and body
  console.log("req.query", req.query);
  console.log("req.body", req.body);
  console.log("Authorization code:", code);

  res.send('Code received. You can now use it in Postman.');
});
 

app.listen(3000, () => console.log('Listening on http://localhost:3000'));
