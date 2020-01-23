import React from "react";

class TodoInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: { title: "", completed: false }
    };

    this.onChange = this.onChange.bind(this);
    this.onAddTodoClick = this.onAddTodoClick.bind(this);
  }

  render() {
    const { title } = this.state.todo;

    return (
      <div>
        <input type="text" onChange={this.onChange} value={title} />
        <button type="button" onClick={this.onAddTodoClick}>
          Add todo
        </button>
      </div>
    );
  }

  // methods
  onChange(event) {
    // change input title
    this.setState({
      todo: {
        ...this.state.todo,
        title: event.target.value
      }
    });
  }

  onAddTodoClick(event) {
    //! no check if addTodo is a function
    this.props.addTodo(this.state.todo, event);
    // then, clear the text
    this.setState({
      todo: {
        ...this.todo,
        title: ""
      }
    });
  }
}

export default TodoInput;
