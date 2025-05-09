const express = require("express");
const app = express();
const people = require("./routes/people");
app.use(express.json());
app.use("/api/people", people);

app.listen(6000, () => {
  console.log("Server listening on port 6000");
});
