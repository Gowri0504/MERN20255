import React, {useState, useEffect} from 'react'
import axios from 'axios';

const Todo = () => {
    const [task,setTask]= useState([])
    const [todo,setTodo] = useState([])
    const[editing, setediting] = useState(null)

    const fetchTodo = async() =>{
        const response = await axios.get(`http://localhost:3000/todo/`);
        console.log(response.data);
        setTodo(response.data.data);
    }
    useEffect(()=>{
        fetchTodo()
    },[]);

    const handleAddOREdit = () =>{
        console.log('Add or Edit')
    }
    const handleDelete = () =>{
        console.log('Delete')
    }
  return (
    <div>
        <h2>Todo</h2>
        <input type="text" 
            value={task}
            placeholder='Enter the task'
            onChange={(e)=>setTask(e.target.value)}
        />
        <button onClick={handleAddOREdit}>{editing? "Update" : "Add"}</button>
        <h2>Todo List</h2>
        <ul>
            {todo.map((todo)=>(
                <li key={todo._id}>
                    <h3>{todo.task}</h3>
                    <button onClick={()=>setediting(todo._id)}>Edit</button>
                    <button onClick={handleDelete}>Delete</button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Todo
