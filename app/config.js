var mongoose = require('mongoose');

var uri = process.env.CUSTOMCONNSTR_MONGOLAB_URI || 'mongodb://localhost:4568';
mongoose.createConnection(uri);

var db = mongoose.connection;

mongoose.connection.on('error', function (err) {
 console.log('mongoose database connection error');
});



module.exports = db;


// var db = Bookshelf.initialize({
//   client: 'sqlite3',
//   connection: {
//     host: '127.0.0.1',
//     user: 'your_database_user',
//     password: 'password',
//     database: 'shortlydb',
//     charset: 'utf8',
//     filename: path.join(__dirname, '../db/shortly.sqlite')
//   }
// });