// - handle all routes for books i.e. same as above
// - implement all routes for handling comments on each book
// - implement routes to
//   - add comments
//   - view all comments for a specific book
//   - edit/delete a comment

var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.json({ books });
});

router.get("/:id", (req, res, next) => {
  var id = req.params.id;
  Book.find(id, (err, books) => {
    if (err) return res.status(500).json(err);
    res.json({ books });
  });
});

router.post("/new", (res, req, next) => {
  Book.create((err, createdBook) => {
    if (err) return res.status(500).json(err);
    res.json({ createdBook });
  });
});

router.put("/:id/edit", (req, res, next) => {
  var id = req.params.id;
  Book.update(id, (err, updatedBook) => {
    if (err) return res.status(500).json(err);
    res.json({ updatedBook });
  });
});

router.delete("/:id/delete", (req, res, next) => {
  var id = req.params.id;
  Book.delete(id, (err, deletedBook) => {
    if (err) return res.status(500).json(err);
    res.json({ deletedBook });
  });
});

router.post("/:id/comment", (res, req, next) => {
  var id = req.params.id;
  Book.find(id, (err, books) => {
    if (err) return res.status(500).json(err);
    Comment.create((err, comment) => {
      if (err) return res.status(500).json(err);
      res.json({ comment });
    });
  });
});

router.get("/:id/comment", (res, req, next) => {
  var id = req.params.id;
  Book.find(id, (err, books) => {
    if (err) return res.status(500).json(err);
    Comment.find((err, comments) => {
      if (err) return res.status(500).json(err);
      res.json({ comments });
    });
  });
});

router.get("/:id/comment/edit", (res, req, next) => {
  var id = req.params.id;
  Book.find(id, (err, books) => {
    if (err) return res.status(500).json(err);
    Comment.update(id, (err, updatedComment) => {
      if (err) return res.status(500).json(err);
      res.json({ updatedComment });
    });
  });
});

router.get("/:id/comment/delete", (res, req, next) => {
  var id = req.params.id;
  Book.find(id, (err, book) => {
    if (err) return res.status(500).json(err);
    Comment.delete((err, deletedComment) => {
      if (err) return res.status(500).json(err);
      res.json({ deletedComment });
    });
  });
});

module.exports = router;
