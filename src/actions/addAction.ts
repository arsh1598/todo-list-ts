import {taskItem} from "../TaskItem";
export default function addAction(task:typeof taskItem) {
    return {
      type: 'ADD',
      payload: task,
    };
  };