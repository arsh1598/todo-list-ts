import { taskItem } from "../TaskItem";
export default function updateAction(task:typeof taskItem, id:number) {
    return {
      type: 'UPDATE',
      payload: {task, id}
    };
  };