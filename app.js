const express = require("express");
const dbconnect = require("./config");
const app = express();

const router = expressRouter();
router.get("/", (req, res) => {
  res.send("soy piola");
});

app.use(router);
app.listen(3001, () => {
  console.log("server is running on port 3001");
});
dbconnect();
