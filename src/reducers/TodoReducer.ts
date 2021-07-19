import { TState } from "../provider/TodoProvider";
type TEditType = {
  type: string;
  payload: { id: string; todo: string | "" };
};
type TAddType = {
  type: string;
  payload: { id: string; todo: string | "" };
};

type TAction = TEditType | TAddType;
const TodoReducer = (state: TState, action: TAction): TState => {
  switch (action.type) {
    case "ADD_TODO":
      return { ...state, todoLists: [...state.todoLists, action.payload] };
    case "EDIT_TODO":
      return {
        ...state,
        todoLists: state.todoLists.map((item) =>
          item.id === action.payload.id
            ? { ...item, todo: action.payload.todo }
            : item
        ),
      };
    case "DELETE_TODO":
      return {
        ...state,
        todoLists: state.todoLists.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    case "SEARCH_TODO":
      return {
        ...state,
        filterdListsText: action.payload.todo,
      };
    default:
      return state;
  }
};
export default TodoReducer;
