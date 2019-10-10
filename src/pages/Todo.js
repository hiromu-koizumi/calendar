import React,{useEffect} from 'react';

const Todo = ({day,todoList}) => {
   
    return (
        <>
            <div>
            {/* この日のタスクがあるかどうかfilterでチェックし、あればそのタスクを表示する処理 */}
                {todoList.filter(x => x.day === day).length>=1?
                todoList.filter(x => x.day === day).map((item,i)=>(
                    <div key={i}>{item.todo}</div>
                )):""}
            </div>
        </>
    )
    
}

export default Todo;