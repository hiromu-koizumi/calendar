import React, { useState } from 'react'
import {Router, Route,Link,Switch} from 'react-router-dom';
import TodoList from './DetailTodoList';
import { addTodo } from '../../FirebaseAction';


const DetailTodoList = (props) => {
  
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