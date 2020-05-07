import React from 'react'
import './style.css'

const Todo = (props) => {
  return(
    <div className='Todo'>
      <p>{props.task}
        <span className="close" onClick={() => {props.click(props.id)}}>&times;</span>
      </p>
    </div>
  )

}

export default Todo;