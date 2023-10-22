const express = require('express');
const app = express();

app.use(express.json())
const PORT = 3000;

app.get('/status',(req, res) => {
  const status = {
    'Status': "success"
  }

  res.send(status)
})

app.listen(PORT, () => {
  console.log(`The API is running at ${PORT}`);
})