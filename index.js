const cors = require("cors");
const express = require("express");
const app = express();

const PORT = process.env.PORT;


// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

app.get("/api/timestamp/:date_string?", (req, res) => {
  var dateString = req.params.date_string;

  if(/\d{5,}/.test(dateString)) {
    dateString = parseInt(dateString);
  }

  const date = dateString ? new Date(dateString) : new Date();

  if(date.toString() === "Invalid Date") {
    res.json({error: date.toString()});
  } else {
    res.json({unix: date.getTime(), utc: date.toUTCString()})
  }
});

const listener = app.listen(PORT, () => {
  console.log("App listening on port " + listener.address().port);
});
