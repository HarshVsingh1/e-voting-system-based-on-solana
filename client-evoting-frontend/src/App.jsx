
import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Homepage from './homepage'
import Adminpannel from './adminPannel';
import Adminlogin from './adminlogin';
import Voting from './voting';
import Votingpage from './voting';

function App() {
 

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Homepage></Homepage>} ></Route>
          <Route path='/adminlogin' element={<Adminlogin></Adminlogin>} ></Route>
          <Route  path='/admin' element={<Adminpannel></Adminpannel>} ></Route>
          <Route path='/voting/:uuid' element={<Votingpage></Votingpage>} ></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App 
