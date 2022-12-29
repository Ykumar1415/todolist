const mongoose = require("mongoose"); 
const schema = mongoose.Schema; 
const userSchema = new schema({
    text: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model("Listdata", userSchema);