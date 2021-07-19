import { TState } from "../provider/TodoProvider";
const TodoReducer = (state: TState, action: any): TState => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    default:
      return [...state];
  }
};
export default TodoReducer;
