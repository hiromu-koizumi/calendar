import React from 'react';

const Form = (props) => (
  <form className="" onSubmit={props.handleAdd}>
    <div className="">
      <input name="title" type="text" className="todo-input"/>
      <div className="todo-add-button">
        <button className="">ToDoを追加</button>
      </div>　
    </div>
  </form>
);

export default Form;