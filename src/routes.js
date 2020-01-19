const { Router } = require('express');

const routes = Router();

routes.get('/', (req, res) => {
  return res.json({ asdf: 'Aeiaow' });
})

module.exports = routes;
