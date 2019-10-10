import React, { useState, useEffect } from 'react'
import {BrowserRouter as Router, Route,Link,Switch} from 'react-router-dom';
import {fetchTodo} from '../FirebaseAction'
import Todo from './Todo'


const CalendarPage = () => {
  const [year, setYear] = useState(new Date().getFullYear())
  const [month, setMonth] = useState(new Date().getMonth() + 1)
  const [todoList, setTodoList] = useState([]);
  const calendar = createCalendar(year, month)
  const onClick = (n) => () => {
    const nextMonth = month + n
    if (12 < nextMonth) {
      setMonth(1)
      setYear(year + 1)
    } else if (nextMonth < 1) {
      setMonth(12)
      setYear(year - 1)
    } else {
      setMonth(nextMonth)
    }
  }

  
  useEffect(() => {
    var count;
    for (count = 0; count < 32; count++) {
      fetchTodo(""+year+month,setTodoList)    
    }
  },[]);


  return (
    <>
      <h1>{`${year}年${month}月`}</h1>
      <div>
        <button onClick={onClick(-1)}>{'prev'}</button>
        <button onClick={onClick(1)}>{'next'}</button>
      </div>
      <table>
        <tbody>
          {calendar.map((week, i) => (
            <tr key={week.join('')}>
              {week.map((day, j) => (
                <th className={`${year}${month}${day}`} key={`${i}${j}`}>
        {/*       todoListの中にこの日のタスクがあるかfilterでチェックしている。
                  あればそのタスクをstateで遷移先に値を渡している　　　　　　　　    */}
                  <Link to={{pathname:`/detail/${year}${month}${day}`,
                  state:{month:""+year+month,
                    todo:todoList.filter(x => x.day === ""+year+month+day).length>=1
                      ? todoList.filter(x => x.day === ""+year+month+day) : ""}}}>
                      {day}
                  </Link>
                <Todo day={""+year+month+day} todoList={todoList}/>
                </th>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}


const createCalendar = (year, month) => {
　//　月の最初の曜日を返す
  const first = new Date(year, month - 1, 1).getDay()
  // 月の最後の日を返す
  const last = new Date(year, month, 0).getDate()

  return [0, 1, 2, 3, 4, 5].map(weekIndex => {
    return [0, 1, 2, 3, 4, 5, 6].map(dayIndex => {
      const day = dayIndex + 1 + weekIndex * 7
      return day - 1 < first || last < day - first ? null : day - first
    })
  })
}

export default CalendarPage;