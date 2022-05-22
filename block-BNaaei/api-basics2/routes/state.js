var express = require("express");
var router = express.Router();
var Country = require("../models/country");
var State = require("../models/state");

router.get("/", function (req, res, next) {
  var id = req.params.id;
  Country.find(id, (err, country) => {
    if (err) return next(err);
    State.find({}, (err, states) => {
      let state = states.slice().sort((a, b) => a.id - b.id);
      res.json({ state });
    });
  });
});

router.post("/new", function (req, res, next) {
  State.create(req.body, (err, state) => {
    if (err) return next(err);
    res.send("state added");
  });
});

router.get("/neighbours", (res, req, next) => {
  var id = req.params.id;
  State.find({}, (err, state) => {
    if (err) return next(err);

    res.json(state.neighbouring_states);
  });
});

router.put("/:id/edit", function (req, res, next) {
  var id = req.params.id;
  State.findByIdAndUpdate(id, (err, updatedstate) => {
    if (err) return next(err);
    res.json({ updatedstate });
  });
});

router.delete("/:id/delete", function (req, res, next) {
  var id = req.params.id;
  State.findByIdAndDelete(id, (err, deletedstate) => {
    if (err) return next(err);
    res.send("state deleted");
  });
});

module.exports = router;
