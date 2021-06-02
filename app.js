const express = require('')
const hostname = '127.0.0.1';
const port = 5000;

app.get('/',(req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World! I am your new NodeJS app! \n');
});

app.listen(port, () => {
  console.log(`Server running at PORT ${port}`);
});
