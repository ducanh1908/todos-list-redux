import "./App.css";
import NewTodo from "./components/new-todo";
import TodoList from "./components/todo-list";

function App() {
  return (
    <div className="App">
      <NewTodo />
      <TodoList />
    </div>
  );
}

export default App;
