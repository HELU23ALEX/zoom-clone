const express = require("express");
const app = express();

const server = require("http").Server(app);
// anytime we call a v4 function unique numbers will be generated or every time the app refreshes in this case
const { v4: uuidV4 } = require("uuid");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.redirect(`/${uuidV4()}`);
});
app.get("/:room", (req, res) => {
  res.render("room", { roomId: req.params.room });
});

server.listen(process.env.PORT || 3000);
