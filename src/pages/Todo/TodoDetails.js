import React from 'react';
import './TodoDetails.css';

const TodoDetails = ({todo, handleCompleted}) => {
    const { _id, title, assign, description, deadline, status, createdAt, updatedAt } = todo
    var createdate = new Date(createdAt).toLocaleString()
    //console.log(todo);
    return (
        <div className='tododetails'>
            <div>
                <p>Task name - {title}</p>
                <p>Assigned to - {assign}</p>
                <p>Created on - {createdate}</p>
            </div>
            <div className='actions'>
                <button>Edit</button>
                <button onClick={()=>handleCompleted(_id)}>Completed</button>
                <button>Delete</button>
            </div>
        </div>
    );
};

export default TodoDetails;