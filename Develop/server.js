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
