const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
  async index(req, res) {
    const devs = await Dev.find();

    return res.json(devs);
  },

  async store(req, res) {
    const { github_username, techs, latitude, longitude } = req.body;

    let dev = await Dev.findOne({ github_username });

    if (!dev) {  
      const gitResponse = await axios.get(`https://api.github.com/users/${github_username}`);
      const { name = login, avatar_url, bio } = gitResponse.data;
      const techArray = parseStringAsArray(techs);
      
      const location = {
        type: 'Point',
        coordinates: [longitude, latitude],
      }
    
    
      dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techArray,
        location
      });
    
      return res.json(dev);
    };
    return res.json({ error: `Error - ${github_username} already exists.` });
  }    
};
