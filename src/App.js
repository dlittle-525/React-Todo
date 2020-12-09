import React from 'react';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const todos = [
  {
    task: 'Organize garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = {
      todos: todos
    };
    console.log("App Constructor state: ", this.state);
  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  toggleCompleted = todoId => {
    console.log("App toggleCompleted todoId ", todoId);
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todoId === todo.id) {
          console.log("App toggleCompleted todo.id: ", todo.id);
          console.log("App toggleCompleted todo.completed: ", todo.completed);
          return {
            ...todo,
            completed: !todo.completed
          };
        } else {
          return todo;
        }
      })
    })
  }

  addTodo = todo => {
    const newTodo ={
      task: todo,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  };

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      todos: this.state.todos.filter(todo => !todo.completed)
    });
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTodo={this.addTodo} />
        <TodoList
        todos={this.state.todos}
        toggleCompleted={this.toggleCompleted}
        clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
