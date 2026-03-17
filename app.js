const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", __dirname + "/apps/views");

app.use(express.static(__dirname + "/apps/public"));

// routes
app.use(require("./apps/controllers"));

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
