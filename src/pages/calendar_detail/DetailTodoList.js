import React, { useState } from 'react'

const DetailTodoList = (props) => {

  console.log(props.todo)
  return (
    <>
    { props.todo?
        props.todo.map((item,i)=>(
          <div key={i}>
            {item.todo}
          </div>
        ))
    :""
  }
    </>
  )
}


export default DetailTodoList;