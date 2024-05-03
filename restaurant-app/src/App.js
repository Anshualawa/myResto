import './App.css';
import {
  BrowserRouter as Router, Route, Routes
} from 'react-router-dom';
import Home, { Navbar } from './component/Home';
import RestaurantList from './component/RestaurantList'
import RestaurantCreate from './component/RestaurantCreate'
import RestaurantUpdate from './component/RestaurantUpdate'
import RestaurantSearch from './component/RestaurantSearch'
import RestaurantDetail from './component/RestaurantDetail'

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/list' element={<RestaurantList />} />
          <Route path='/create' element={<RestaurantCreate />} />
          {/* <Route path='/update/:id' render={props => (<RestaurantUpdate {...props} />)} /> */}
          <Route path='/update/:id' element={<RestaurantUpdate />} />
          <Route path='/details' element={<RestaurantDetail />} />
          <Route path='/search' element={<RestaurantSearch />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
