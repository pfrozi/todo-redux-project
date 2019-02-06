import React, { Component } from "react";

import { connect } from "react-redux";
import { addTodo, toggleTodo, removeTodo } from "./actions";

const Item = ({ remove, toogleDone, todo }) => {
  const style = { textDecoration: todo.done ? "line-through" : "" };
  return (
    <li>
      <span style={style}>{todo.text}</span>{" "}
      <button onClick={toogleDone}>{todo.done ? "Undone" : "Done!"}</button>{" "}
      <button onClick={remove}>Remove</button>
    </li>
  );
};

class App extends Component {
  state = { newTodo: "" };

  handlerNewTodoChange = ({ target: { value } }) => {
    this.setState({ newTodo: value });
  };

  handlerAddOnClick = () => {
    const { addTodo } = this.props;
    addTodo(this.state.newTodo);
    this.state.newTodo = "";
  };

  handlerDoneOnClick = index => () => {
    const { toggleTodo } = this.props;
    toggleTodo(index);
  };

  handlerRemoveOnClick = index => () => {
    const { removeTodo } = this.props;
    removeTodo(index);
  };

  render() {
    const { newTodo } = this.state;

    return (
      <div className="App">
        <h1>TODO LIST REDUX</h1>
        <input
          type="input"
          name="Todo"
          value={newTodo}
          onChange={this.handlerNewTodoChange}
        />
        <button onClick={this.handlerAddOnClick}>Add</button>
        <ul>
          {this.props.todos.map((todo, i) => (
            <Item
              key={i.toString()}
              toogleDone={this.handlerDoneOnClick(i)}
              todo={todo}
              remove={this.handlerRemoveOnClick(i)}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export { App };

const mapStateToProps = state => ({ todos: state.todos });

const mapDispatchToProps = dispatch => ({
  addTodo: text => dispatch(addTodo(text)),
  toggleTodo: index => dispatch(toggleTodo(index)),
  removeTodo: index => dispatch(removeTodo(index))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
