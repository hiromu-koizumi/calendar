import React, { useState } from 'react'
import DoneButton from './DoneButton'
import './style.scss'

const DetailTodoList = ({todo,month,setTodo}) => {

  return (
    <>
    {todo?
        todo.map((item,i)=>(
          <div key={i} className="flex">
            <div>
              <DoneButton setTodo={setTodo}　todoIndex={i} todo={todo} todoData={item} month={month}/>
            </div>
            <div>
              {item.todo}
            </div>
          </div>
        ))
    :""
  }
    </>
  )
}


export default DetailTodoList;