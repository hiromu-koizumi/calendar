import React,{useEffect} from 'react';

const Todo = ({day,todoList}) => {
   
    return (
        <>
            {/* この日のタスクがあるかどうかfilterでチェックし、あればそのタスクを表示する処理 */}
                {todoList.filter(x => x.day === day).length>=1?
                todoList.filter(x => x.day === day).map((item,i)=>(
                    <div　className="calendar-todo" key={i}>{item.todo}</div>
                )):""}
        </>
    )
    
}

export default Todo;