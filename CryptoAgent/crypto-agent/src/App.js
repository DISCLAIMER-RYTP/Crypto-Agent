import './App.css';
import Home from './Home';
import Page404 from './Page404';
import Main from './Main';
import About from './About'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='*' element={<Page404/>}/>
        <Route path='/main' element={<Main/>}/>
        <Route path='/about' element={<About/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
