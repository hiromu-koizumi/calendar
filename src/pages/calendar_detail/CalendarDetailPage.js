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
    <div className="calendar-detail-wrap ui container">
      <div className="back-button-wrap">
        <button className='back-button' onClick={() => props.history.goBack()}><i className="angle left icon"></i></button>
      </div>
      <DetailTodoList　setTodo={setTodo} todo={todo} month={props.location.state.month}/>
      <Form handleAdd={handleAdd}/>
    </div>
  )
}



export default CalendarDetailPage;