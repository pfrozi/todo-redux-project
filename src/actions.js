import Actions from "./consts";

export const addTodo = text => ({
  type: Actions.ADD_TODO,
  text
});

export const toggleTodo = index => ({
  type: Actions.TOGGLE_TODO,
  index
});

export const removeTodo = index => ({
  type: Actions.REMOVE_TODO,
  index
});
