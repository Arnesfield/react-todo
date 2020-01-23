import React from "react";
import TodoItem from "./TodoItem";

class TodoList extends React.Component {
  render() {
    const { list, onTodoItemAction } = this.props;
    let listItemsEl;
    if (list.length > 0) {
      // map thru todo list to do this
      listItemsEl = list.map((item, i) => (
        <TodoItem
          key={i}
          index={i}
          {...item}
          onTodoItemAction={onTodoItemAction}
        />
      ));
    } else {
      listItemsEl = <div>Nothing to do like you always do!</div>;
    }

    return <ul className="Todo">{listItemsEl}</ul>;
  }
}

export default TodoList;
