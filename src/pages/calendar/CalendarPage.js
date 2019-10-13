import React, { useState, useEffect } from 'react'
//Router消すと画面遷移できなくなる
import {BrowserRouter as Router,Link} from 'react-router-dom';
import {fetchMonthTodo} from '../../FirebaseAction'
import Todo from './Todo'
import './style.scss'


const CalendarPage = (props) => {
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
      fetchMonthTodo(""+year+month,setTodoList)    
  },[]);


  return (
    <>
      <div className="calendar-title">{`${year}年${month}月`}</div>
      <div className="calendar-button">
        <button className='calendar-button-prev' onClick={onClick(-1)}><i className="caret left icon"></i></button>
        <button className='calendar-button-next' onClick={onClick(1)}><i className="caret right icon"></i></button>
      </div>
      <table className="calendar-table">
        <tbody>
          <tr　className="calendar-day">
            <th>日</th>
            <th>月</th>
            <th>火</th>
            <th>水</th>
            <th>木</th>
            <th>金</th>
            <th>土</th>
          </tr>
          {calendar.map((week, i) => (
            <tr key={week.join('')}>
              {week.map((day, j) => (
                <th className={`calendar-${day}`} key={`${i}${j}`}>
                  <Link to={{pathname:`/detail/${year}${month}${day}`,
                  state:{month:""+year+month}}}>
                    {day}
                    <Todo day={""+year+month+day} todoList={todoList}/>
                  </Link>
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