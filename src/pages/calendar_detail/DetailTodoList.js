import React, { useState } from 'react'
import DoneButton from './DoneButton'

const DetailTodoList = ({todo,month,setTodo}) => {

  return (
    <>
    {todo?
        todo.map((item,i)=>(
          <div key={i}>
            {item.todo}
            <DoneButton setTodo={setTodo}　todoIndex={i} todo={todo} todoData={item} month={month}/>
          </div>
        ))
    :""
  }
    </>
  )
}


export default DetailTodoList;