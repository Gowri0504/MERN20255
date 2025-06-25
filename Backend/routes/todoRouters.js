const express = require('express');
const todoRoute = express.Router();
const {getTodo, postTodo, putTodo, deleteTodo, getTodoById} = require('../controller/todoControllers')

todoRoute.get('/get',getTodo);

todoRoute.get('/get:id',getTodoById);

todoRoute.post('/post',postTodo);

todoRoute.put('/put/:id',putTodo);

todoRoute.delete('/delete/:id',deleteTodo);

module.exports = todoRoute;