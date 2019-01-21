const models = require("../models");
module.exports = {

  getAll: async (req, res, next) => {
    try{
      const Poll = models.Poll;
      let polls = await Poll.findAll();
      res.send(polls);
    }catch(err)
    {
      next(err)
    }
  },

  getOne: async (req, res, next) => {
    try{
      const Poll = models.Poll;
      const poll_id = req.params.id;
  
      let poll = await Poll.findOne({
        where: {
          id: poll_id
        }
      });
  
      res.send(poll);
    }catch(err)
    {
      next(err)
    }
    
  }
};
