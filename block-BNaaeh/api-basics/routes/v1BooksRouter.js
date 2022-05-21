var express = require("express");
var router = express.Router();

/* GET users listing. */
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

router.put("/:id", (req, res, next) => {
  var id = req.params.id;
  Book.find(id, (err, updatedBook) => {
    if (err) return res.status(500).json(err);
    res.json({ updatedBook });
  });
});

router.delete("/:id", (req, res, next) => {
  var id = req.params.id;
  Book.find(id, (err, deletedBook) => {
    if (err) return res.status(500).json(err);
    res.json({ deletedBook });
  });
});
module.exports = router;

// 1. GET /api/books - list of all books
// 2. GET /api/books/:id - get single book
// 3. POST /api/books - create a book
// 4. PUT /api/books/:id - update a book
// 5. DELETE /api/books/:id - delete a book
