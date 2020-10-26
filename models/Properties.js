const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PropertiesSchema = new Schema({
  security_code: {
    type: String,
    required: true,
  },
  depositor_name: {
    type: String,
    required: true,
  },
  depositor_code: {
    type: String,
    required: true,
  },
  item: {
    type: String,
    required: true,
  },
  weight: {
    type: String,
    required: true,
  },
  deposit_date: {
    type: String,
    default: Date.now,
  },
  purpose_of_deposit: {
    type: String,
    required: true,
  },
  depositor_country: {
    type: String,
    required: true,
  },
  country_of_origin: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Properties", PropertiesSchema);
