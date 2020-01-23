import React from "react";
import "../assets/scss/components/Todo.scss";

class TodoItem extends React.Component {
  render() {
    const { title, completed } = this.props;
    return <li className={completed ? "-completed" : null}>{title}</li>;
  }
}

export default TodoItem;
