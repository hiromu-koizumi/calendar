import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CalendarPage from './pages/calendar/CalendarPage';
import CalendarDetailPage from './pages/calendar_detail/CalendarDetailPage';


const App = () => {
  
  return (
    <div>
        <Router>
        <div className="container">
          <Switch>
            <Route path="/" exact component={CalendarPage}/>
            <Route path="/detail/:id" exact component={CalendarDetailPage}/>
          </Switch>
        </div>
        </Router>
    </div>
  )
}


export default App;