import React, { useEffect, useState } from 'react';
import TodoDetails from './TodoDetails';

const Todo = () => {
    const [todos, setTodos] = useState(null);
    const [error, setError] = useState(null);

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


    const handleDeleted = async (id) => {
        const response = await fetch(`http://localhost:5000/api/todos/${id}`, 
        {
            method: 'DELETE',
            headers: {
                'Content-Type' : 'application/json'
            }
        })

        const json = await response.json();

        if(!response.ok) {
            setError(json.error);
            console.log(error);
        }

        if(response.ok) {
            setError(null);
            console.log('Todo Deleted', json);
            const newTodos = todos.filter(todo => todo._id !== id);
            setTodos(newTodos);
        }
    }


    const handleCompleted = async (id) => {
        const updatedValue = {status : 1};
        const response = await fetch(`http://localhost:5000/api/todos/${id}`, 
        {
            method: 'PATCH',
            body: JSON.stringify(updatedValue),
            headers: {
                'Content-Type' : 'application/json'
            }
        })

        const json = await response.json();

        if(!response.ok) {
            setError(json.error);
            console.log(error);
        }

        if(response.ok) {
            setError(null);
            console.log('Todo Updated', json);
            const newTodos = todos.filter(todo => todo._id !== id);
            setTodos(newTodos);
        }
    }
    return (
        <div>
            <h2>Todo List</h2>
            <div className="todos">
                {todos && todos.map((todo)=>(
                    <TodoDetails 
                        key={todo._id} 
                        todo={todo} 
                        handleCompleted={handleCompleted} 
                        handleDeleted={handleDeleted}
                    />
                ))}
            </div>
        </div>
    );
};

export default Todo;