const express = require("express");
const app = express();
require("dotenv").config();
// console.log(process.env);
const ejs = require("ejs");
app.set("view engine", "ejs");

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  let today = new Date();
  let currentDay = today.getDay();
  console.log(currentDay);

  let type = "a weekday";
  let adv = "it's time to work hard";

  if (currentDay === 0 || currentDay === 6) {
    type = "the weekend";
    adv = "it's time to have some fun";
  }

  res.render("index.ejs", {
    dayType: type,
    advice: adv,
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
