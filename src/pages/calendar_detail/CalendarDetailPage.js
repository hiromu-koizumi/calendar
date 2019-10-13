import React, { useState, useEffect } from 'react'
import Form from './Form';
import DetailTodoList from './DetailTodoList';
import { addTodo, fetchDayTodo } from '../../FirebaseAction';


const CalendarDetailPage = (props) => {

  const [todo, setTodo] = useState([]);

// 　トップページから渡されたタスクをstateに保存している
  useEffect(() => {
    fetchDayTodo(props.match.params.id,props.location.state.yearMonth,setTodo)
  },[]);

  const getDayTodo = () =>{
    fetchDayTodo(props.match.params.id,props.location.state.yearMonth,setTodo)
  }
  
  // データ保存
 const handleAdd= (e) => {
    e.preventDefault()

    if(e.target.title.value===""){
      return;
    }
    
    getDayTodo()

    //firebaseに保存する処理
    addTodo(e.target.title.value,props.match.params.id,props.location.state.yearMonth)
    
    // inputのvalueを空に
    e.target.title.value = ''
  }


  return (
    <div className="calendar-detail-wrap ui container">
      <div className="back-button-wrap">
        <button className='back-button' onClick={() => props.history.goBack()}><i className="angle left icon"></i></button>
      </div>
      <div className="calendar-detail-day">
        {props.location.state.month}月{props.location.state.day}日
      </div>
      <DetailTodoList　setTodo={setTodo} todo={todo} yearMonth={props.location.state.yearMonth}/>
      <Form handleAdd={handleAdd}/>
    </div>
  )
}



export default CalendarDetailPage;