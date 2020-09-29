const { Schema, model } = require("mongoose");

const playerSchema = Schema({
    userID: {
        type: String,
        required: true
    }
});

module.exports = model("playerModel", playerSchema, "PLAYER_COLLECTION");