var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var stateSchema = new Schema({
  name: String,
  country: { type: Schema.Types.ObjectId, ref: country },
  population: Number,

  area: Number,
  neighbouring_states: Schema.Types.ObjectId,
});

module.exports = mongoose.model("State", stateSchema);
