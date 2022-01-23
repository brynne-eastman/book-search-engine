const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://beastman117:Forestgump111!@cluster0.lnbkf.mongodb.net/googlebooks`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;