import { useSelector } from "react-redux";
import TodoListItem from "./todo-list-item";
const selectTodos = (state) => state.todos;
export default function TodoList() {
  const todos = useSelector(selectTodos);
  return (
    <div>
      {todos.map((todo) => {
        return <TodoListItem todo={todo} key={todo.id} />;
      })}
    </div>
  );
}
