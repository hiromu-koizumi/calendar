import React, { Component } from 'react';
import {deleteTodo} from '../../FirebaseAction'



const DoneButton = ({todoData,month,setTodo,todo,todoIndex}) => {

    const onClick = () =>{
        console.log(todoData)
        deleteTodo(todoData,month,setTodo,todo,todoIndex)
    }

       return (
        <div className="good-button-wrap">
             {/* <div onClick={this.onClick}>
                <i className="heart icon red"></i> 
            </div> */}
            <div>
            {/* 　　どのハートが押されたか識別するためにIdが必要。詳細ページでは、回答は同じquestionIdを取得しているためanswerIdで識別する必要がある。 */}
                <input className="heart-input" onClick={onClick}  type="checkbox"/>
                <label className="heart-label"><i className="ui heart icon"></i></label>
                {/* <label className="heart-label" htmlFor={this.props.postData.answerId ? this.props.postData.answerId : this.props.postData.questionId}>❤</label> */}
            </div>
        </div>
       )
};

export default DoneButton;



