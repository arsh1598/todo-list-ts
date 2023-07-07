import { useSelector } from "react-redux/es/hooks/useSelector";
import { RootState } from "../reducer";
import "./TaskList.css";
import { useDispatch } from "react-redux";
import updateAction from "../actions/updateAction";
import { taskItem } from "../TaskItem";
import { useState } from "react";
import MyDialog from "./MyDialog";
import deleteAction from "../actions/deleteAction";

function TaskList() {
  const dispatch = useDispatch();
  const textList = useSelector(
    (state: RootState) => state.textList
  ) as (typeof taskItem)[];
  function handleCheckboxChange(id: number) {
    let isChecked: boolean = textList[id].isChecked;
    const updatedTextList = {
      ...textList[id],
      isChecked: !isChecked,
    };

    dispatch(updateAction(updatedTextList, id));
  }

  function handleEdit(id: number, updatedTask: string) {
    const updatedTextList = {
      ...textList[id],
      text: updatedTask,
    };
    dispatch(updateAction(updatedTextList, id));
  }

  function handleDelete(id: number) {
    dispatch(deleteAction(id));
  }

  const [openDialog, setOpenDialog] = useState(false);
  const [indexToBeUpdated, setindexToBeUpdated] = useState(0);

  const handleOpenDialog = (id: number) => {
    setindexToBeUpdated(id);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <div>
      <h2>Tasks:</h2>
      <ul>
        {textList.map((taskItem, index) => (
          <li key={index}>
            <div className="list-item">
              <input
                type="checkbox"
                id={`checkbox-${index}`}
                checked={taskItem.isChecked}
                onChange={() => handleCheckboxChange(index)}
              />
              <div className="text-wrapper">
                <span className={`checkbox-${index}`}>
                  <h3
                    className="text"
                    style={{
                      textDecoration: taskItem.isChecked
                        ? "line-through"
                        : "none",
                      color: taskItem.isChecked ? "grey" : "black",
                    }}
                  >
                    {taskItem.text}
                  </h3>
                </span>
              </div>
              <div className="buttons-wrapper">
                <button
                  className="edit-icon"
                  onClick={() => handleOpenDialog(index)}
                >
                  Edit
                </button>
                <MyDialog
                  open={openDialog}
                  onClose={handleCloseDialog}
                  handleEdit={handleEdit}
                  id={indexToBeUpdated}
                />
                <button className="delete-icon" onClick={()=> handleDelete(index)}>Delete</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
