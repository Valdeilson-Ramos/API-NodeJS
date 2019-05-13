const express = require("express");
const bodyParser = require("body-parser");
//const mogoose = require("mongoose");

/*mongoose.connect("localhost:27017", {
    useNewUrlParser: true
});
*/
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(require("./src/routes"));

require("./controllers/authController")(app);

app.listen(3000);
