import React, { createContext, useReducer } from "react";
import { v4 } from "uuid";
import TodoReducer from "../reducers/TodoReducer";
export interface IState {
  todoLists: { id: string; todo: string; priority: string }[];
  dispatch: React.Dispatch<{
    type: any;
    payload: any;
  }>;
  filterdListsText: string;
  priorityfilterd: string;
  currentLists: {}[];
}
export type TState = {
  todoLists: { id: string; todo: string; priority: string }[];
  filterdListsText: string;
  priorityfilterd: string;
  currentLists: {}[];
};

const initialData: IState = {
  todoLists: [
    {
      id: v4(),
      todo: "Do homework",
      priority: "low",
    },
  ],
  dispatch() {},
  filterdListsText: "",
  priorityfilterd: "",
  currentLists: [],
};

export const todoContext = createContext<IState>({
  todoLists: [],
  dispatch() {},
  filterdListsText: "",
  priorityfilterd: "",
  currentLists: [],
});
const TodoProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer<React.Reducer<TState, any>>(
    TodoReducer,
    {
      todoLists: initialData.todoLists,
      filterdListsText: "",
      priorityfilterd: "",
      currentLists: [],
    }
  );
  return (
    <todoContext.Provider
      value={{
        todoLists: state.todoLists,
        dispatch,
        filterdListsText: state.filterdListsText,
        priorityfilterd: state.priorityfilterd,
        currentLists: state.currentLists,
      }}
    >
      {children}
    </todoContext.Provider>
  );
};

export default TodoProvider;
