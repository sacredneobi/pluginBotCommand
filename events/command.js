const { pluginEvent, defData } = require("../utils");

pluginEvent.on("command", (data, answer) => {
  const { login, password, pluginData, payload, telegramId, command } = data;

  let newPluginData = defData(data, "command");

  console.log(newPluginData, data);

  answer({});
});
