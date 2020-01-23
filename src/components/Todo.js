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
    this.onTodoItemAction = this.onTodoItemAction.bind(this);
  }

  render() {
    return (
      <div>
        <TodoInput addTodo={this.addTodo} />
        <TodoList
          list={this.state.list}
          onTodoItemAction={this.onTodoItemAction}
        />
      </div>
    );
  }

  // methods
  // event also as 2nd arg, but you won't use it anyway
  addTodo(todo) {
    this.setState({
      list: [...this.state.list, todo]
    });
  }

  // this thing handles 'done' and 'delete' actions
  onTodoItemAction(index, action, event) {
    const { list } = this.state;
    const newList = [...list];

    switch (action) {
      case "done":
        // looks complicated, but it just toggles the completed prop
        newList[index] = {
          ...list[index],
          completed: !list[index].completed
        };
        break;
      case "delete":
        // delete the item on that index
        newList.splice(index, 1);
        break;
      default:
        return false;
    }

    this.setState({
      list: newList
    });
  }
}

export default Todo;
