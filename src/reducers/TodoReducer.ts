import { TState } from "../provider/TodoProvider";
type TEditType = {
  type: string;
  payload: { id: string; todo: string | ""; priority: string };
};
type TAddType = {
  type: string;
  payload: { id: string; todo: string | ""; priority: string };
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
            ? {
                ...item,
                todo: action.payload.todo,
                priority: action.payload.priority,
              }
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
    case "PRIORITY_FILTER":
      // const newDataList = null;
      switch (action.payload.priority) {
        case "all":
          return { ...state, currentLists: state.todoLists };
        case "low":
          return {
            ...state,
            currentLists: state.todoLists.filter(
              (item) => item.priority === action.payload.priority
            ),
          };
        case "medium":
          return {
            ...state,
            currentLists: state.todoLists.filter(
              (item) => item.priority === action.payload.priority
            ),
          };
        case "high":
          return {
            ...state,
            currentLists: state.todoLists.filter(
              (item) => item.priority === action.payload.priority
            ),
          };
      }
      return { ...state };
    default:
      return state;
  }
};
export default TodoReducer;
