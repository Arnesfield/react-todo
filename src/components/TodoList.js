import React from "react";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        { title: "Study React", completed: false },
        { title: "Learn Redux", completed: false },
        { title: "Give up because it's hard", completed: true }
      ],
      completedStyle: { "text-decoration": "line-through" }
    };
  }
  render() {
    // map thru todo list to do this
    const listItemsEl = this.state.list.map(t => (
      <li style={t.completed ? this.state.completedStyle : null}>{t.title}</li>
    ));

    return <div>{listItemsEl}</div>;
  }
}

export default TodoList;
