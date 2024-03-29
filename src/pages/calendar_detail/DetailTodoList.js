import React from 'react'
import DoneButton from './DoneButton'
import './style.scss'

const DetailTodoList = ({todo,yearMonth,setTodo}) => {

  return (
    <div className="calendar-detail-todo-wrap">
      {todo?
        todo.map((item,i)=>(
          <div key={i} className="flex calendar-detail-todo-inner">
            <div>
              <DoneButton setTodo={setTodo}　todoIndex={i} todo={todo} todoData={item} yearMonth={yearMonth}/>
            </div>
            <div className="calendar-detail-todo">
              {item.todo}
            </div>
          </div>
        ))
        :""
      }
    </div>
  )
}


export default DetailTodoList;