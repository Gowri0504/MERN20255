const express = require('express');
const todoRoute = express.Router();
const {getTodo, postTodo, putTodo, deleteTodo, getTodoById} = require('../controller/todoControllers')

todoRoute.get('/',getTodo);

todoRoute.get('/:id',getTodoById);

todoRoute.post('/create',postTodo);

todoRoute.put('/edit/:id',putTodo);

todoRoute.delete('/delete/:id',deleteTodo);

module.exports = todoRoute;