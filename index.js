const express = require("express")
const app = express()

const PORT = process.env.PORT;

app.get("/api/timestamp/:dateString", (req, res) => {
  const dateString = req.params.dateString;

  const date = new Date(dateString);

  if(date.toString() === "Invalid Date") {
    res.json({error: date.toString()});
  } else {
    res.json({unix: date.getTime(), utc: date.toUTCString()})
  }
});

const listener = app.listen(PORT, () => {
  console.log("App listening on port " + listener.address().port);
});
