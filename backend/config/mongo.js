const mongoose = require('mongoose');
const uri = process.env.MONGODB_CONNECT
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
module.exports = mongoose