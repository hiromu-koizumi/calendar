import React,{useEffect} from 'react';

const Todo = ({day,todoList}) => {
   

    return (
        <>
            <div>
                {todoList.filter(x => x.day === day).length>=1?todoList.filter(x => x.day === day)[0].todo:""}
            </div>
        </>
    )
    
}

export default Todo;