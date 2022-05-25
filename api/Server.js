const express = require("express");
const fileupload = require("express-fileupload");
const cors = require("cors");
const bodyParser = require('body-parser');
const app = express();
global.__basedir = __dirname;
var corsOptions = {
  origin: "http://localhost:3000"
};
app.use(cors(corsOptions));
const initRoutes = require("./routes/route");
app.use(fileupload());
app.use(express.static("files"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
initRoutes(app);
let port = 8080;
app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});