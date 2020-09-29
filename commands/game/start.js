const { playerModel } = require("../../models");

module.exports = {
  name: "start", // set command name
  aliases: [], // set command aliases
  permissions: [], // set command permissions
  ownerOnly: false, // set true if command is owner only
  enabled: true, // set true if command enabled
  cooldown: 5, // in seconds
  exec: async (client, message, args) => {
    // the rest of the code
    let user = await playerModel.findOne({ userID: message.author.id }).exec();
    if (!user) {
      await playerModel.create({ userID: message.author.id });
      await message.react("✅");
    }
    return;
  },
};
