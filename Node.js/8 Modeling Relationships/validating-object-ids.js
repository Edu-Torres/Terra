// MongoDB Driver generates Ids
// No need to wait for mongoDB, you can have several instances,
// more scalability. Ids are 12 bytes (snowflake model)
const mongoose = require("mongoose");

const id = new mongoose.Types.ObjectId();
console.log(id); // new ObjectId("6373074fcf209f928308e172")
// first 4 bytes timestamp
console.log(id.getTimestamp()); // 2022-11-15T03:28:15.000Z

// validate
console.log(mongoose.Types.ObjectId.isValid("1234")); // false

