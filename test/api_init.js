const models = require("../models");

resetDB();
async function resetDB() {
  try {
    await models.sequelize.sync({ logging: false, force: true });
    await models.User.create({
      email: "testUser@gmail.com",
      password: "testPasseord123"
    });

    await models.Poll.create({
      title: "test question?",
      user_id: 1
    });

    await models.Option.create({
      text: "test question?",
      poll_id: 1
    });

    process.exit();
  } catch (err) {
    console.log(err);
  }
}
