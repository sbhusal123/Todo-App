import React, {useState} from 'react'

const AddTodo = (props) => {

  const [todoState, setTodoState] = useState({
      task: ""
  });

  const contentChangeHandler = (event) =>{
    setTodoState({
        task:  event.target.value
    });
  };

  const addTaskHandler = () => {
      if (todoState.task !== ""){
          props.click(todoState);
          setTodoState({
              task: ""
          });
      }else{
        alert("Please append empty task.");
      }
  }

  return(
    <div>
      <input type="text" onChange={contentChangeHandler} value={todoState.task} placeholder="Type a task detail"/>
      <br/><br/>
      <button onClick={addTaskHandler}> Add Task </button>
    </div>
  )
}

export default AddTodo;