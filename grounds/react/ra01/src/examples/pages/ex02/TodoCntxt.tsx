import { TodoProvider } from "../../cpnts/Context/ToDo";
import { TodoForm } from "../../cpnts/Context/ToDo/Form";
import { TodoList } from "../../cpnts/Context/ToDo/List";

export const ToDoCntxt = () => {
    return (
      <TodoProvider>
        <TodoForm />
        <TodoList />
      </TodoProvider>
    );
  };
  
  export default ToDoCntxt;
  