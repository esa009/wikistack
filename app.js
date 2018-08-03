const express = require("express");
const app = express();
const morgan = require('morgan');




app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));


app.use(express.urlencoded({ extended: false }));


app.get("/", (req, res) => {
  res.send("hello world");


});

const port = 3000;
app.listen(port, () =>{

  console.log(`App listening in ${port}`);
})




