import { Box, Button, TextField } from "@mui/material";
import React, { useReducer } from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from "dayjs";

//initial state of the form
const initialValue = {
  title : "jh",
  assign : "fbf",
  description : "hjg",
  deadline : dayjs(new Date()).$d,  //Default is today
  error : null
}

  const reducer = (state, action) => {
    console.log(state.title, action);
    switch ( action.type ) {
      case 'title':        return { ...state, title : action.payload};
      case 'assign':       return { ...state, assign : action.payload};
      case 'description':  return { ...state, description : action.payload};
      case 'deadline':     return { ...state, deadline : action.payload};
      case 'error':        return { ...state, error : action.payload};
      case 'reset':        return initialValue;
      default:             throw new Error(`Unknown action type: ${action.type}`);
    }
  }

const TodoForm = () => {


  const [state, dispatch] = useReducer(reducer, initialValue)
  console.log(state);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const todo = state;

    const response = await fetch(`http://localhost:5000/api/todos`, {
      method: "POST",
      body: JSON.stringify(todo),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      dispatch({ type : 'error', payload : json.error})
    }

    if (response.ok) {
      dispatch({ type : 'reset'})
    }
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <div>
      <form className="create" onSubmit={handleSubmit}>
        <h3>Add a New To-Do</h3>

        <Box
          sx={{
            "& .MuiTextField-root": { m: 1, width: "50%" },
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "10px",
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            label="Title"
            placeholder="Type the Title of the task"
            required
            onChange={(e) => dispatch({ type : 'title', payload : e.target.value })}
            // value={state.title.value}
          />

          <TextField
            label="Assigned"
            placeholder="Name of the person assigned"
            required
            onChange={(e) => dispatch({ type : 'assign', payload : e.target.value})}
            // value={state.assign.value}
          />

          <TextField
            label="Description"
            placeholder="Short description of the task"
            onChange={(e) => dispatch({ type : 'description', payload : e.target.value})}
            // value={state.description.value}
          />
          
          <DateTimePicker
            label="Deadline"
            onChange={(newValue) => dispatch({ type : 'deadline', payload : newValue})}
            renderInput={(params) => <TextField {...params} />}
            // value={state.deadline.$d}
          />
          
          <Button type="submit" variant="contained" endIcon={<ArrowRightIcon />}>
            Submit{" "}
          </Button>
        </Box>

        {state.error && <div className="error">{state.error}</div>}
      </form>
    </div>
    </LocalizationProvider>
  );
};

export default TodoForm;
