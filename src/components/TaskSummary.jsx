import TaskSummaryData from "./TaskSummaryData";
import TaskSummaryHeader from "./TaskSummaryHeader";
import { useSelector } from "react-redux";

const TaskSummary = () => {

  const tasks = useSelector(store => store.task);

  return (
    <>
      <TaskSummaryHeader />
      {tasks.map((task) => <TaskSummaryData key={task.taskName} task={task}/>)} 
    </>
  );
};

export default TaskSummary;
