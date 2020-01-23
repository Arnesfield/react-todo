import React from "react";
import TodoList from "../components/TodoList";
import TodoInput from "../components/TodoInput";

class App extends React.Component {
  render() {
    return (
      <div>
        <TodoInput />
        <TodoList />
      </div>
    );
  }
}

export default App;
