import { TState } from "../provider/TodoProvider";
type editType = {
  type: string;
  payload: { id: string; todo: string };
};
type addType = {
  type: string;
  payload: { id: string; todo: string };
};
type TAction = editType | addType;
const TodoReducer = (state: TState, action: TAction): TState => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    case "EDIT_TODO":
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, todo: action.payload.todo }
          : item
      );

    default:
      return [...state];
  }
};
export default TodoReducer;
