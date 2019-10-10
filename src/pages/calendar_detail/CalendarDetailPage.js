import React, { useState } from 'react'
import {Router, Route,Link,Switch} from 'react-router-dom';
import Form from './Form';
import DetailTodoList from './DetailTodoList';
import { addTodo } from '../../FirebaseAction';


const CalendarDetailPage = (props) => {

  const [todo, setTodo] = useState();
  console.log(props.location.state.todo)
  
  // データ保存
 const handleAdd= (e) => {
    e.preventDefault()
    // フォームから受け取ったデータをオブジェクトに挿入して、stateのtodo配列に追加
    // todo.push({title: e.target.title.value})
    // setStateを使ってstateを上書き
    setTodo({todo: e.target.title.value})

    addTodo(e.target.title.value,props.match.params.id,props.location.state.month)
    
    // inputのvalueを空に
    e.target.title.value = ''
  }
  return (
    <>
      <Form handleAdd={handleAdd}/>
      <DetailTodoList todo={props.location.state.todo}/>

    </>
  )
}



export default CalendarDetailPage;