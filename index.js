const express = require('express')
const app = express()
const port = 3000

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post('/login', (req, res) => {
    console.log(req.body);
  res.sendFile(__dirname +"/index.html")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
