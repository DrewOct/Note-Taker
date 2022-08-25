const router = require("express").Router();
const { notes } = require("../../db/db");
const { createNewNote, deleteNote } = require("../../lib/noteFunctions");

// retrieve saved notes
router.get("/notes", (req, res) => {
  let saved = notes;
  res.json(saved);
});

// post new notes
router.post("/notes", (req, res) => {
  req.body.id = notes.length.toString();
  let note = createNewNote(req.body, notes);
  res.json(note);
});

// option to delete old notes
router.delete("/notes/:id", (req, res) => {
  deleteNote(notes, req.params.id);
  res.json(notes);
});

module.exports = router;
