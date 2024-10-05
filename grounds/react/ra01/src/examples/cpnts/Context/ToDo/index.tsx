import React, { createContext, useState } from 'react';
//import { isTemplateExpression } from 'typescript';

type TodoListItemType = {
  no: number;
  todo: string;
  done: boolean;
};

type TodoListContextValueType = {
  state: { todoList: Array<TodoListItemType> };
  actions: {
    addTodo: (todo: string) => void;
    deleteTodo: (no: number) => void;
    toggleDone: (no: number) => void;
  };
};

const TodoContext = createContext<TodoListContextValueType | undefined>(
  undefined
);

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const TodoProvider = (props: Props) => {
  const [todoList, setTodoList] = useState<Array<TodoListItemType>>([
    { no: 1, todo: '영상 올리기', done: false },
    { no: 2, todo: 'React TypeScript', done: false },
    { no: 3, todo: '영상 편집', done: true },
    { no: 4, todo: 'Context API Study', done: false },
  ]);

  const addTodo = (todo: string) => {
    setTodoList([
      ...todoList,
      { no: new Date().getTime(), todo: todo, done: false },
    ]);
  };

  const deleteTodo = (no: number) => {
    todoList.filter((item: TodoListItemType) => item.no !== no);
    setTodoList(todoList);
  };

  const toggleDone = (no: number) => {
    const index = todoList.findIndex((item) => item.no === no);
    todoList[index].done = true;
    setTodoList(todoList);
  };

  const values: TodoListContextValueType = {
    state: { todoList },
    actions: { addTodo, deleteTodo, toggleDone },
  };

  return (
    <TodoContext.Provider value={values}>{props.children}</TodoContext.Provider>
  );
};

export default TodoContext;
