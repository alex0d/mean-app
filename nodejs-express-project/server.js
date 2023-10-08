const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const app = express();
const routes = require('./app/routes/contact.routes');

const HOST_PORT = process.env.HOST_PORT || 8080;
root = "./";

app.use(cors({
  origin: '*'
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(root, 'dist/angular-14-crud-example')));

app.use('/api/contacts', routes);
app.get('*', (req, res) => {
  res.sendFile('dist/angular-14-crud-example/index.html', {root});
});


app.listen(HOST_PORT, () => {
  console.log(`Server is running on port ${HOST_PORT}.`);
});
