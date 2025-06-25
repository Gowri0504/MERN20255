import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Todo = () => {
    const [task, setTask] = useState('')
    const [todo, setTodo] = useState([])
    const [editing, setediting] = useState(null)
    const api = 'https://mern20255.onrender.com'

    const fetchTodo = async () => {
        const response = await axios.get(`${api}/todo/get`);
        console.log(response.data);
        setTodo(response.data.data);
    }
    useEffect(() => {
        fetchTodo()
    }, []);

    const handleAddOREdit = async (e) => {
        e.preventDefault();
        if (editing) {
            await axios.put(`${api}/todo/put/${editing}`, { task })

        }
        else {
            await axios.post(`${api}/todo/post/`, { task })

        }

        setediting(null);
        fetchTodo()
    }
    const handleDelete = async (id) => {
        await axios.delete(`${api}/todo/delete/${id}`);
        fetchTodo()
        console.log('Delete')
    }

    const handleToggleStatus = async (todo) => {
        await axios.put(`${api}/todo/put/${todo._id}`, {
            status: !todo.status
        })
        fetchTodo()
    }

    return (
        <div>
            <h2>Todo</h2>
            <input type="text"
                value={task}
                placeholder='Enter the task'
                onChange={(e) => setTask(e.target.value)}
            />
            <button onClick={handleAddOREdit}>{editing ? "Update" : "Add"}</button>
            <h2>Todo List</h2>
            <ul>
                {todo.map((todo) => (
                    <li key={todo._id}>
                        <span onClick={() => { handleToggleStatus(todo) }} style={{ cursor: "pointer", textDecoration: todo.status ? "line-through" : "none" }} >
                            <p>{todo.task}</p>
                        </span>
                        <button onClick={() => {
                            setediting(todo._id)
                            setTask(todo.task)
                        }
                        }

                        >Edit</button>
                        <button onClick={() => handleDelete(todo._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Todo