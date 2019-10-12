import React, { Component } from 'react';
import {deleteTodo} from '../../FirebaseAction'



const DoneButton = ({todoData,month,setTodo,todo,todoIndex}) => {

    const onClick = () =>{
        console.log(todoData)
        deleteTodo(todoData,month,setTodo,todo,todoIndex)
    }

       return (
        <button className="done-button"  onClick={onClick}>
            <i className="check circle outline icon"></i>
        </button>
       )
};

export default DoneButton;



