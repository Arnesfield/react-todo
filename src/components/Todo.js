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

    this.addTodo = this.addTodo.bind(this);
  }

  // event also as 2nd arg, but you won't use it anyway
  addTodo(todo) {
    this.setState({
      list: [...this.state.list, todo]
    });
  }

  render() {
    return (
      <div>
        <TodoInput addTodo={this.addTodo} />
        <TodoList list={this.state.list} />
      </div>
    );
  }
}

export default Todo;
