import React, { createContext, useReducer } from "react";
import { v4 } from "uuid";
import TodoReducer from "../reducers/TodoReducer";
export interface IState {
  todoLists: { id: string; todo: string }[];
  dispatch: React.Dispatch<{
    type: any;
    payload: any;
  }>;
}
export type TState = { id: string; todo: string }[];

const initialData: IState = {
  todoLists: [
    {
      id: v4(),
      todo: "Do homework",
    },
  ],
  dispatch() {},
};

export const todoContext = createContext<IState>({
  todoLists: [],
  dispatch() {},
});
const TodoProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer<React.Reducer<TState, any>>(
    TodoReducer,
    initialData.todoLists
  );
  return (
    <todoContext.Provider value={{ todoLists: state, dispatch }}>
      {children}
    </todoContext.Provider>
  );
};

export default TodoProvider;
