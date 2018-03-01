const express = require("express");
const http = require("http");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname,"static")));

app.get('/', function(req, res){
    res.write("Bienvenu sur ma page");
    res.end();
});

// Serveur REST
// GET /users => JSON des utilisateurs
app.get('/users', function(req, res){
    const users = ["Christophe", "Valérie"];
    res.json(users);
});

const server = http.createServer(app);
server.listen(3001);