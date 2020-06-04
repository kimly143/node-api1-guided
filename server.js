//import is pulling from node_modules now
const express = require('express');
//import database file to this file so we can use it
const db = require('./database.js');

const server = express();

//
server.use(express.json())

server.get('/users', (req, res) => {
	const users = db.getUsers();
	res.json(users);
	// res.json({ message: "hello world"})
});

server.get('/users/:id', (req, res) => {
	const user = db.getUserById(req.params.id);

	if (user) {
		res.json(user);
	} else {
		res.status(404).json({
			message: 'User not found'
		});
	}
});

server.post('/users', (req, res) => {
    if (!req.body.name) {
        return res.status(400).json({
            message: "Need a name for user",
        })
    }
	const newUser = db.createUser({
		name: req.body.name,
	})

	res.status(201).json(newUser);
});

server.put("/users/:id", (req, res) => {
    const user = db.getUserById(req.params.id)

    if (user) {
        const updatedUser = db.updateUser(user.id, {
            name: req.body.name || user.name,
        })

        res.json(updatedUser)
    } else {
        res.status(404).json({
            message: "user not found"
        })
    }
})
server.listen(8080, () => {
	console.log('server started in port 8080');
});
