import React from "react";
import TodoItem from "./TodoItem";

class TodoList extends React.Component {
  render() {
    // map thru todo list to do this
    const listItemsEl = this.props.list.map(item => <TodoItem {...item} />);
    return <ul className="Todo">{listItemsEl}</ul>;
  }
}

export default TodoList;
