var mongoose = require('mongoose');

var schemaOptions = {
    timestamps: true,
    toJSON: {
      virtuals: true
    }
  };

  var memberSchema = new mongoose.Schema({
      name: String,
      phone: String,
      designation: String,
      email: String,
      auto_meal: Boolean,
      today_meal: Boolean
  });

  var Member = mongoose.model('Member', memberSchema);

  module.exports = Member;