import React, {Component} from 'react';
import Todo from './components/Todo';
import AddTodo from './components/AddTodo';

class App extends Component{


  state= {
    todos:[
      {id: 1, task: 'Task1'},
      {id: 2, task: 'Task2'}
    ]
  }

  addTodoClickHandler = (todoData) => {
    todoData.id = this.state.todos.length + 1;
    let todos = [...this.state.todos, todoData];
    this.setState({
      todos: todos
    });
  }

  removeTodoItemHandler = (todo_id) => {
    // console.log(id);


    var todoList = this.state.todos.filter(todo => {
      return todo.id !== todo_id
    });

    this.setState({
      todos: todoList
    });
  }

  render(){

      const completedNoticeStyle={
        'color': 'green',
        'font-size': "30px"
      }

      let todosRenderObj = null;

      if (this.state.todos.length === 0){
          todosRenderObj= ( <p style={completedNoticeStyle}> Yay! completed all tasks </p> )
      }else{
          todosRenderObj = this.state.todos.map( todo => {
            return <Todo task={todo.task}
                    id={todo.id} key={todo.id}
                    click={this.removeTodoItemHandler}
                    />
          });
      }

      return(
        <div>
            <h1>Todo Tasks</h1>
            {todosRenderObj}
            <br></br>
            <AddTodo click={this.addTodoClickHandler}/>
        </div>
      )
  }
}

export default App;
