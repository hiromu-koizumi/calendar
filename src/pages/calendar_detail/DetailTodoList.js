import React, { useState } from 'react'
import DoneButton from './DoneButton'

const DetailTodoList = ({todo,month}) => {

  return (
    <>
    {todo?
        todo.map((item,i)=>(
          <div key={i}>
            {item.todo}
            <DoneButton todoData={item} month={month}/>
          </div>
        ))
    :""
  }
    </>
  )
}


export default DetailTodoList;