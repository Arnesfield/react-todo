import React from "react";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      completedStyle: { "text-decoration": "line-through" }
    };
  }

  render() {
    // map thru todo list to do this
    const listItemsEl = this.props.list.map(t => (
      <li style={t.completed ? this.state.completedStyle : null}>{t.title}</li>
    ));

    return <div>{listItemsEl}</div>;
  }
}

export default TodoList;
