const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/playground")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.log("Could not connect to MongoDB...", err));

const houseSchema = new mongoose.Schema({
  rooms: {
    type: Array,
    validate: {
      validator: async function (v) {
            return new Promise((res, rej) => {
                // Do some async work
                setTimeout(() => {
                    res(v && v.length > 0);
                  }, 3000);
            }) 
      },
      message: "A house should have at least one room.",
    }
  }
});
const House = mongoose.model("Houses", houseSchema);
const yellowHouse = new House({ rooms: [] });
yellowHouse
  .validate()
  .then(() => console.log("Valid"))
  .catch((err) => console.log(err.message));
