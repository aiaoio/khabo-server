var mongoose = require('mongoose');

var schemaOptions = {
    timestamps: true,
    toJSON: {
      virtuals: true
    }
  };

  var dateSchema = new mongoose.Schema({
    date: Date,
  },schemaOptions);

  var Member = mongoose.model('Member', dateSchema);

  module.exports = Member;