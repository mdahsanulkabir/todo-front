import React, { useState } from 'react';

const TodoForm = () => {
    const [title, setTitle] = useState("");
    const [assign, setAssign] = useState("");
    const [description, setDescription] = useState("");
    const [deadline, setDeadline] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const todo = {title, assign, description, deadline}

        const response = await fetch(`http://localhost:5000/api/todos`, 
        {
            method: 'POST',
            body: JSON.stringify(todo),
            headers: {
                'Content-Type' : 'application/json'
            }
        })

        const json = await response.json();

        if(!response.ok) {
            setError(json.error)
        }

        if(response.ok) {
            setTitle('');
            setAssign('');
            setDeadline('');
            setDescription('');
            setError(null);
            console.log('new todo added', json);
        }
    }
    return (
        <div>
            <form className="create" onSubmit={handleSubmit}>
                <h3>Add a New To-Do</h3>

                <div style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 3fr',
                            width: '1200px',
                            maxWidth: '80vw'                         
                            }}>
                <label htmlFor="title">Title : </label>
                <input 
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    name="title" />

                <label htmlFor="assign">Assigned To : </label>
                <input 
                    type="text"
                    onChange={(e) => setAssign(e.target.value)}
                    value={assign}
                    name="assign" />

                <label htmlFor="description">Description : </label>
                <input 
                    type="textarea"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    name="description" />

                <label htmlFor="deadline">Deadline : </label>
                <input 
                    type="text"
                    onChange={(e) => setDeadline(e.target.value)}
                    value={deadline}
                    name="deadline" />

                </div>
                <input type="submit" value="Submit" />
                {error && <div className='error'>{error}</div>}
            </form>
        </div>
    );
};

export default TodoForm;