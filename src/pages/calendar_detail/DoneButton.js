import React, { Component } from 'react';
import {deleteTodo} from '../../FirebaseAction'



const DoneButton = ({todoData,month,setTodo,todo,todoIndex}) => {

    const onClick = () =>{
        console.log(todoData)
        deleteTodo(todoData,month,setTodo,todo,todoIndex)
    }

       return (
        <button class="ui icon button"  onClick={onClick}>
            <i class="check circle outline icon"></i>
        </button>
       )
};

export default DoneButton;



