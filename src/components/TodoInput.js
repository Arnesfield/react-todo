import React from "react";

class TodoInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: { title: "", completed: false }
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onAddTodoClick = this.onAddTodoClick.bind(this);
  }

  render() {
    const { title } = this.state.todo;

    return (
      <form onSubmit={this.onSubmit}>
        <input required type="text" value={title} onChange={this.onChange} />
        <button>Add todo</button>
      </form>
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

  onSubmit(event) {
    event.preventDefault();
    this.onAddTodoClick(event);
  }

  onAddTodoClick(event) {
    //! no check if addTodo is a function
    // TODO: duplicate todo titles are not checked
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
