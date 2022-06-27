const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL)

// !! USE BELOW IF GETTING DEPRECATION WARNINGS FROM DB !!
// mongoose.connect(process.env.DATABASE_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true
//   });
// shortcut to mongoose.connection object
const db = mongoose.connection

db.on('connected', function() {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`)
})