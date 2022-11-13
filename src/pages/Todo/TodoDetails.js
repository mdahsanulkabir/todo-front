import { Button, Typography } from '@mui/material';
import React from 'react';
import EditToDo from './EditToDo';
import './TodoDetails.css';

const TodoDetails = ({todo, handleCompleted, handleDeleted}) => {
    const { _id, title, assign, description, deadline, status, createdAt, updatedAt } = todo
    let statusText;
    if(!status) {
        statusText = 'Pending';
    } else {
        statusText = 'Complete';
    }
    var createdate = new Date(createdAt).toLocaleString()
    var deadlineDate = new Date(deadline).toLocaleString()
    var updatedDate = new Date(updatedAt).toLocaleString()
    //console.log(todo);
    return (
        <div className='tododetails' style={{display: status ? "none" : "flex"}}>
            <div>
                <Typography variant='h6' color='primary' align='left'>Task name - {title}</Typography>
                <p>Assigned to - {assign}</p>
                <p>Description - {description}</p>
                <p>Created on - {createdate}</p>
                <p>Status - {statusText}</p>
                <p>Deadline - {deadlineDate}</p>
                <p style={{display: (createdAt === updatedAt) ? "none" : "block"}}>Updated at - {updatedDate}</p>
            </div>
            <div className='actions' style={{display : 'flex'}}>
                {/* <Button variant='contained' color='primary'>Edit</Button> */}
                <EditToDo todo={todo}/>
                <Button variant='contained' color='success' onClick={()=>handleCompleted(_id)}>Completed</Button>
                <Button variant='outlined' color='error' onClick={()=>handleDeleted(_id)}>Delete</Button>
            </div>
        </div>
    );
};

export default TodoDetails;