const express = require("express");
const app = express();
const morgan = require('morgan');
const { db } = require('./models');

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("hello world");
});

db.authenticate().
  then(() => {
    console.log('connected to the database');
  })

const init = async () => {
  await models.db.sync({force: true});

  const port = 3000;
  app.listen(port, () => {
    console.log(`App listening in ${port}`);
  });
}

init();