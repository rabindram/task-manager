import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { taskActions } from "../store/TaskSlice";
import {useDispatch} from "react-redux"

const AddTask = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [taskName, setTaskName] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [project, setProject] = useState('');
  const [date, setDate] = useState('');
  const [taskStatus, setTaskStatus] = useState('Open');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      taskName,
      customerName,
      date,
    };
    console.log('New Task:', newTask);
    // Here, you could add the new task to your state or send it to your server
    dispatch(taskActions.addTask({taskName, customerName, project, date, taskStatus}));
    // Reset the form
    setTaskName('');
    setCustomerName('');
    setDate('');
    navigate("/tasks");
    
  };

  return (
    <form className="form-addTask" onSubmit={handleSubmit}>
      <div className="form-data-input">
        <label className="form-data-input-1" htmlFor="taskName">Task Name:</label>
        <input
          type="text"
          id="taskName"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          required
        />
      </div>
      <div className="form-data-input">
        <label className="form-data-input-1" htmlFor="customerName">Customer Name:</label>
        <input
          type="text"
          id="customerName"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          required
        />
      </div>
      <div className="form-data-input">
        <label className="form-data-input-1" htmlFor="customerName">Project:</label>
        <input
          type="text"
          id="project"
          value={project}
          onChange={(e) => setProject(e.target.value)}
          required
        />
      </div>
      <div className="form-data-input">
        <label className="form-data-input-1" htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTask; 
