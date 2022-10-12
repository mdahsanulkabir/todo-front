import React, { useEffect, useState } from 'react';
import TodoDetails from './TodoDetails';

const Todo = () => {
    const [todos, setTodos] = useState(null);

    useEffect( ()=> {
        const fetchTodo = async () => {
            const response = await fetch(`http://localhost:5000/api/todos`)
            const json = await response.json()

            if(response.ok) {
                setTodos(json)
            }
        }

        fetchTodo();
    }, [])

    const handleCompleted = (id) => {
        console.log("pressed id ", id);
        const newTodos = todos.filter(todo => todo._id !== id);
        setTodos(newTodos);
    }
    return (
        <div>
            <h2>Todo List</h2>
            <div className="todos">
                {todos && todos.map((todo)=>(
                    <TodoDetails key={todo._id} todo={todo} handleCompleted={handleCompleted}/>
                ))}
            </div>
        </div>
    );
};

export default Todo;