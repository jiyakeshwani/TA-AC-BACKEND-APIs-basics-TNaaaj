var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var countrySchema = new Schema({
  name: String,
  continent: String,
  population: Number,
  ethnicity: [String],
  area: Number,
  states: {type: Schema.Types.ObjectId , ref: states},
    neighbouring_countries: Schema.Types.ObjectId,
});

module.exports = mongoose.model("Country", countrySchema);
