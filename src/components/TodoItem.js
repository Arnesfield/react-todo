import React from "react";
import "../assets/scss/components/Todo.scss";

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.onActionClick = this.onActionClick.bind(this);
  }

  render() {
    const { title, completed, index } = this.props;
    const { onActionClick } = this;

    return (
      <li className={completed ? "-completed" : null}>
        <span style={{ "margin-right": "4px" }}>{title}</span>
        <button type="button" onClick={e => onActionClick("done", e)}>
          Done {index}
        </button>
        <button type="button" onClick={e => onActionClick("delete", e)}>
          Delete
        </button>
      </li>
    );
  }

  // methods
  onActionClick(action, event) {
    //! no check if onTodoItemAction is a function
    const { index, onTodoItemAction } = this.props;
    onTodoItemAction(index, action, event);
  }
}

export default TodoItem;
