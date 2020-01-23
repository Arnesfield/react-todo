import React from "react";
import TodoList from "../components/TodoList";
import TodoInput from "../components/TodoInput";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        { title: "Study React", completed: false },
        { title: "Learn Redux", completed: false },
        { title: "Give up because it's hard", completed: true }
      ]
    };
  }

  render() {
    return (
      <div>
        <TodoInput />
        <TodoList list={this.state.list} />
      </div>
    );
  }
}

export default Todo;
