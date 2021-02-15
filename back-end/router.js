const routes = require('express').Router();
const Handler = require('./handler');

routes.get('/', (req, res) => {
    res.status(200).json({ status: 'connected' });
});


//get users expenses
routes.get('/user_expense', (req, res) => {
    const data = new Handler('user_expense');
    res.status(200).json(data.readFile());
});

//get fund
routes.get('/fund', (req, res) => {
    const data = new Handler('fund');
    res.status(200).json(data.readFile());
});

//create user
routes.post('/user_expense', (req, res) => {
    const handler = new Handler('fund');
    handler.createUser(req.body)
    res.status(200).json(handler.readFile());
});

module.exports = routes;