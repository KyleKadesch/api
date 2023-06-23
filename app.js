const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 4041;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const users = require('./MOCK_DATA.json');

app.get('/', (_, res) => {
    res.send('wooooo');
});

app.get('/users', (_, res) => {
    res.json({users});
});

app.get('/user/:id', (req, res) => {
    const {id} = req.params;
    const user = users.filter((user) => user.id === 1 * id)[0];
    res.json({user});
});

app.post('/adduser', (req, res) => {
    const {id, first_name, last_name, email, gender, ip_address} = req.body;
        if(id && first_name && last_name && email && gender && ip_address) {
            users.push({id, first_name, last_name, email, gender, ip_address});
            res.json({users});
        }
});

app.listen(port, () => {
    console.log(`server is running on port: ${port}`);
});