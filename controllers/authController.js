const jwt = require("jsonwebtoken");
const config = require("../config");
module.exports = {
  authorize: async (req, res, next) => {
    try {
      let auth = req.headers.authorization;
      let token = auth.split(" ")[1];
      let user_data = await jwt.verify(token, config.app.jwt.secret);
      
      req.body.user_id = user_data.id;
      next();
    } catch (err) {
      res.send({
        status: err.status,
        error: err.message
      });
    }
  }
};
