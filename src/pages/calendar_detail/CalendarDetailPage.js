import React, { useState, useEffect } from 'react'
import {Router, Route,Link,Switch} from 'react-router-dom';
import Form from './Form';
import DetailTodoList from './DetailTodoList';
import { addTodo, fetchDayTodo } from '../../FirebaseAction';


const CalendarDetailPage = (props) => {

  const [todo, setTodo] = useState([]);

// 　トップページから渡されたタスクをstateに保存している
  useEffect(() => {
    fetchDayTodo(props.match.params.id,props.location.state.month,setTodo)
    setTodo(props.location.state.todo)
  },[]);

  const getDayTodo = () =>{
    fetchDayTodo(props.match.params.id,props.location.state.month,setTodo)
  }
  
  // データ保存
 const handleAdd= (e) => {
    e.preventDefault()

    getDayTodo()

    //firebaseに保存する処理
    addTodo(e.target.title.value,props.match.params.id,props.location.state.month)
    
    // inputのvalueを空に
    e.target.title.value = ''
  }


  return (
    <div className="ui container">
      <Form handleAdd={handleAdd}/>
      <DetailTodoList　setTodo={setTodo} todo={todo} month={props.location.state.month}/>
    </div>
  )
}



export default CalendarDetailPage;