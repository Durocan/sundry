import React, { useContext } from 'react';
import TodoContext from '..';
import { ToDoItem } from '../Item';

export const TodoList = () => {
  const value = useContext(TodoContext);

  return (
    <ul>
      {value?.state.todoList.map((todo) => (
        <ToDoItem todo={todo} key={todo.no} />
      ))}
    </ul>
  );
};
