const mongoose = require("mongoose");

const connectDb = () => {
  mongoose
    .connect(process.env.DB_URI , {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log(`Database connection succesfull ${process.env.DB_URI}`);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDb;


// const mongoose = require("mongoose");

// const connectDb = () => {
//   mongoose
//     .connect(process.env.DB_URI || "mongodb://localhost:27017/eHealthcare", {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     })
//     .then(() => {
//       console.log(`Database connection succesfull ${process.env.DB_URI}`);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// module.exports = connectDb;

