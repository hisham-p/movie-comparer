// importing mongoose
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
// uri
const uri = `mongodb+srv://mcuser:mcuserpwd@mongo-cluster.sqkz9.mongodb.net/mdev?retryWrites=true&w=majority`;

// mongodb connection
mongoose
    .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('DB Connected'));
let db = mongoose.connection;
db.on('error', err => {
    console.log(`DB connection error: ${err.message}`)
});