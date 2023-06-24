const usersService = require('../services/users.service');

module.exports = {
  create: async (req, res) => {
    const response = await usersService.create(req.body);
    if (response.error) {
      return res.status(400).json(response.error.message);
    } else {
      res.status(201).json(response.result);
    }
  },

  getAll: async (req, res) => {
    console.log('i was in the controller');
    const response = await users.find();

    if (response.error) {
      return res.status(400).json(response.error.message);
    } else {
      console.log(response.result);
      res.status(200).json(response.result);
    }
  },

  getOne: async (req, res) => {
    const response = await users.findOne(+req.params.id);
     if (response.error) {
      return res.status(400).json(error.message);
     } else {
      res.status(200).json(response.result);
     }
  },

  update: async (req, res) => {
    const id = +req.params.id;
    const body = req.body;
    const response = await users.update(id, body);
    if (responsse.error) {
      return res.status(400).json(error.message);
    } else {
      res.status(200).json(result);
    }
  },

  delete: async (req, res) => {
    const id = +req.params.id;
    const response = await users.delete(id);
    if (response.error) {
      return res.status(400).json(error.message);
    } else {
      return res.status(200).json(result);
    }
  },
};
