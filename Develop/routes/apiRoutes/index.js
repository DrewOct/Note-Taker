// set up data return
const router = require("express").Router();
const notesRouter = require("./noteRoutes");

router.use(notesRouter);

module.exports = router;
