import React,{useEffect} from 'react';

const Todo = ({day,todoList}) => {
   

    return (
        <>
            <div>
                {todoList.filter(x => x.day === day).length>=1?todoList.filter(x => x.day === day).map((item,i)=>(
                    <div>{item.todo}</div>
                )):""}
            </div>
        </>
    )
    
}

export default Todo;