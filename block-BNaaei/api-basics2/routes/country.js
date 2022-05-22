var express = require("express");
var router = express.Router();
var Country = require("../models/country");

/* GET users listing. */
router.get("/", function (req, res, next) {
  Country.find({}, (err, country) => {
    if (err) return next(err);
    let country = country.slice().sort((a, b) => a.id - b.id);
    res.json({ country });
  });
});

router.post("/new", function (req, res, next) {
  Country.create(req.body, (err, country) => {
    if (err) return next(err);
    res.send("country added");
  });
});

router.get("/neighbours", (res, req, next) => {
  var id = req.params.id;
  Country.find({}, (err, country) => {
    if (err) return next(err);

    res.json(country.neighbouring_countries);
  });
});

router.get("/religion", (res, req, next) => {
  var id = req.params.id;
  Country.find({}, (err, country) => {
    if (err) return next(err);

    res.json(country.ethinicity);
  });
});

router.put("/:id/edit", function (req, res, next) {
  var id = req.params.id;
  Country.findByIdAndUpdate(id, (err, updatedCountry) => {
    if (err) return next(err);
    res.json({ updatedCountry });
  });
});

router.delete("/:id/delete", function (req, res, next) {
  var id = req.params.id;
  Country.findByIdAndDelete(id, (err, deletedCountry) => {
    if (err) return next(err);
    res.send("country deleted");
  });
});

module.exports = router;
