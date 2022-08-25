const PORT = process.env.PORT || 3006;
const express = require("express");

const app = express();

// including file system module
const fs = require("fs");
const path = require("path");

// including the correct module
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

// bind application-level middleware to an instance of app object
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.static("public"));
app.use(express.json());
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT, () => {
  console.log("API server now on port ${PORT}");
});

function CareerObjParseFromString(str) {
  let array = str.split(","); // [0] = name:drew, [1]=job:programmer
  let obj = {};
  for (let i = 0; i < array.length; i++) {
    if (str.substring("name:")) {
      obj.name = str.split(":"); // [0] =name, [1] drew
    }
    if (str.substring("job:")) {
      obj.job = str.split(":"); // [0] =job, [1] programmer
    }
  }
  return obj;
}

let request_string = "name:drew,job:programmer"; // csv
let newEmployee = CareerObjParseFromString(request_string);
