var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

var todos = [{
	id: 1,
	description: 'meet mom for lunch',
	completed: false
},{
	id: 2,
	descrption: 'in a meeting',
	completed: false
},{
	id: 3,
	description: 'got it',
	completed: true
}];
app.get('/', function(req, res) {
	res.send('todo API root');
});

app.get('/todos', function (req,res) {
	res.json(todos);
});
app.get('/todos/:id', function (req,res) {
	var todoId = parseInt(req.params.id, 10);
	var matchedTodo;
	todos.forEach(function (todo) {
		if (todoId === todo.id) {
			matchedTodo = todo;
		}
	});
	if (matchedTodo){
		res.json(matchedTodo);
	} else {
		res.status(404).send();
	}
	// res.send('asking for todo with id of' + req.params.id);
});

app.listen(PORT, function () {
	console.log('express listening on port' + PORT + '!');
});