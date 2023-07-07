import { taskItem } from "./TaskItem";

const initialState = {
    textList: new Array<typeof taskItem>()
  };

export default function reducer(state = initialState, action: any) {
  if (action.type==='ADD') {
    return { ...state, textList:[ ...state.textList, action.payload ]}
  }
  else if(action.type==='UPDATE'){
    const updatedTextList = [...state.textList];
    updatedTextList[action.payload.id] = action.payload.task;
    return { ...state, textList: updatedTextList };
  }
  else if(action.type==='DELETE'){
    const updatedTextList = state.textList.filter((_, index) => index !== action.payload);
    return { ...state, textList: updatedTextList}
  }
  else{
    return state
  }

}
export type RootState = ReturnType<typeof reducer>;