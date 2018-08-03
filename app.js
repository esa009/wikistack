const express = require("express");
const app = express();
const morgan = require('morgan');
const models = require('./models');
const wikiRouter = require('./routes/wiki');

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));
app.use('/wiki', wikiRouter);

models.db.authenticate().then(() => {
  console.log('connected to the database');
});

const init = async () => {
  await models.db.sync();
  models.db.sync();

  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`App listening in ${PORT}`);
  });
}
init();
