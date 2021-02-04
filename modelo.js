const { Mongoose, modelNames } = require("mongoose");

const {Schema,model} = require (Mongoose)
const catSchema = new Schema ({
    catName: String,
    raza: String,
    edad: {
        type: Number,
        default: 1
    }
});

module.exports = model("gatetes",catSchema);