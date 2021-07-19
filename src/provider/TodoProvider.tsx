import React, { createContext, useReducer } from "react";
import { v4 } from "uuid";
import TodoReducer from "../reducers/TodoReducer";
export interface IState {
  todoLists: { id: string; todo: string }[];
  dispatch: React.Dispatch<{
    type: any;
    payload: any;
  }>;
  filterdListsText: string;
}
export type TState = {
  todoLists: { id: string; todo: string }[];
  filterdListsText: string;
};

const initialData: IState = {
  todoLists: [
    {
      id: v4(),
      todo: "Do homework",
    },
  ],
  dispatch() {},
  filterdListsText: "",
};

export const todoContext = createContext<IState>({
  todoLists: [],
  dispatch() {},
  filterdListsText: "",
});
const TodoProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer<React.Reducer<TState, any>>(
    TodoReducer,
    { todoLists: initialData.todoLists, filterdListsText: "" }
  );
  return (
    <todoContext.Provider
      value={{
        todoLists: state.todoLists,
        dispatch,
        filterdListsText: state.filterdListsText,
      }}
    >
      {children}
    </todoContext.Provider>
  );
};

export default TodoProvider;
