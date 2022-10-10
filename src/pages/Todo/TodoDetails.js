import React from 'react';

const TodoDetails = ({todo}) => {
    const { title, assign, description, deadline, status, createdAt, updatedAt } = todo
    //console.log(todo);
    return (
        <div className='tododetails'>
            <p>Task name - {title}</p>
            <p>Assigned to - {assign}</p>
            <p>Created on - {createdAt}</p>
        </div>
    );
};

export default TodoDetails;