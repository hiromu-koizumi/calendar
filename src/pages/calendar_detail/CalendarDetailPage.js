import React, { useState, useEffect } from 'react'
import {Router, Route,Link,Switch} from 'react-router-dom';
import Form from './Form';
import DetailTodoList from './DetailTodoList';
import { addTodo } from '../../FirebaseAction';


const CalendarDetailPage = (props) => {

  const [todo, setTodo] = useState([]);

// 　トップページから渡されたタスクをstateに保存している
  useEffect(() => {
   setTodo(props.location.state.todo)
  },[]);
  
  // データ保存
 const handleAdd= (e) => {
    e.preventDefault()

    setTodo([...todo,{todo: e.target.title.value}])

    //firebaseに保存する処理
    addTodo(e.target.title.value,props.match.params.id,props.location.state.month)
    
    // inputのvalueを空に
    e.target.title.value = ''
  }


  return (
    <>
      <Form handleAdd={handleAdd}/>
      <DetailTodoList todo={todo} month={props.location.state.month}/>
    </>
  )
}



export default CalendarDetailPage;