const jwt = require("jsonwebtoken");
const models = require("../models");
const config = require("../config");
const HttpError = require("../errors/http");
const bcrypt = require("bcrypt");
module.exports = {
  register: async (req, res, next) => {
    try {
      const User = models.User;

      let { email, password } = req.body;

      if (!email || !password)
        throw new HttpError(400, "Need to send registration data");

      // Find user by email
      let user = await User.findOne({
        where: { email }
      });

      // If user already exists, throw an error
      if (user) throw new HttpError(400, "This user already exists");

      // hash password and create user
      let hash_pass = await bcrypt.hash(password, 10);
      user = await User.create({ email, password: hash_pass });

      let token = jwt.sign(
        {
          id: user.id,
          email: user.email
        },
        config.app.jwt.secret,
        {
          expiresIn: config.app.jwt.expires_in
        }
      );

      let response = {
        status: "ok",
        token
      };
      res.send(response);
    } catch (err) {
      next(err);
    }
  },

  login: async (req, res, next) => {
    try {
      const User = models.User;
      let { email, password } = req.body;

      if (!email || !password)
        throw new HttpError(400, "Need to send login data");

      let user = await User.findOne({
        where: { email }
      });

      if (!user) if (!user) throw new HttpError(400, "User not found");

      // check if password is right
      await bcrypt.compare(password, user.password);

      let token = jwt.sign(
        {
          id: user.id,
          email: user.email
        },
        config.app.jwt.secret,
        {
          expiresIn: config.app.jwt.expires_in
        }
      );

      let response = {
        status: "ok",
        token
      };
      res.send(response);
    } catch (err) {
      next(err);
    }
  },

  createPoll: async (req, res, next) => {
    try {
      const Poll = models.Poll;
      let { title, options } = req.body;

      if (!title || !options) throw new HttpError(400, "Incomplete data sent");

      if (options.length < 2)
        throw new HttpError(400, "Poll needs to have at least 2 options");

      let poll = await Poll.create({
        title,
        user_id: req.body.user_id
      });

      //for each option sent, create an instance in database
      for (option of options) {
        let create_option = {
          text: option,
          poll_id: poll.id
        };

        await models.Option.create(create_option);
      }

      res.send({
        status: "ok",
        data: {
          title,
          options
        }
      });
    } catch (err) {
      next(err);
    }
  },

  myPolls: async (req, res, next) => {
    try {
      const Poll = models.Poll;

      let my_polls = await Poll.findAll({
        where: {
          user_id: req.body.user_id
        }
      });

      res.send(my_polls);
    } catch (err) {
      next(err);
    }
  },
  
  vote: async (req, res, next) => {
    try {
      const Vote = models.Vote;
      let { user_id, ip, option_id } = req.body;

      if (!user_id && !ip) throw new HttpError(400, "No user data provided");

      if (!option_id) throw new HttpError(400, "no option provided");

      await Vote.create(req.body);

      res.send({
        status: "ok",
        data: "voted"
      });
    } catch (err) {
      next(err);
    }
  }
};
