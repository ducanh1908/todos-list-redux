export const addTodoAction = (data) => {
  return {
    type: "todos/addTodo",
    payload: data,
  };
};
export const removeTodoAction = (data) => {
  return {
    type: "todos/removeTodo",
    payload: data,
  };
};
