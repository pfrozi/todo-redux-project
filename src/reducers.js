import Actions from "./consts";

const reducers = (state = { todos: [] }, action) => {
  switch (action.type) {
    case Actions.ADD_TODO:
      return { todos: [...state.todos, { text: action.text, done: false }] };
    case Actions.TOGGLE_TODO:
      return {
        todos: state.todos.map((todo, i) => ({
          ...todo,
          done: action.index === i ? !todo.done : todo.done
        }))
      };
    case Actions.REMOVE_TODO:
      return {
        todos: state.todos.filter((todo, i) => action.index !== i)
      };
    default:
      return state;
  }
};

export default reducers;
