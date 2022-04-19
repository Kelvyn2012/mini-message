var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { userText: messages });
});

router.get("/new", function (req, res) {
  res.render("form");
});

router.post("/new", function (req, res) {
  let user = req.body.newUser;
  let text = req.body.newMessage;
  messages.push({ text: text, user: user, added: new Date() });
  console.log(messages);
  res.redirect("/");
});

module.exports = router;
