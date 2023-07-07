import { useState } from "react";
import "./App.css";
import TaskList from "./components/TaskList";
import { useDispatch } from "react-redux";
import addAction from "./actions/addAction";
import { taskItem } from "./TaskItem";

function App() {
  const [item, setItem] = useState(taskItem);
  const dispatch = useDispatch();
  function handleInputchange(event: React.ChangeEvent<HTMLInputElement>){
    setItem({...item, text: event.target.value});
  }
  function addTask(){
    dispatch(addAction(item));
    setItem(taskItem)
  }
  return (
    <>
      <div className="container">
        <div>
        <input type="text" value ={item.text} onChange={handleInputchange} className="input-field" placeholder="Enter task" />
        <button className="button" onClick={()=> addTask()}>Add Task</button>
        </div>
        <div className="task-list">
          <TaskList></TaskList>
        </div>
      </div>
    </>
  );
}

export default App;
