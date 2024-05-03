import './App.css';
import {
  BrowserRouter as Router, Route, Routes
} from 'react-router-dom';
import Home, { Navbar } from './component/Home';
import RestaurantList from './component/RestaurantList';
import RestaurantCreate from './component/RestaurantCreate';
import RestaurantUpdate from './component/RestaurantUpdate';
import RestaurantSearch from './component/RestaurantSearch';
import RestaurantDetail from './component/RestaurantDetail';
import Login from './component/Login';

function App() {

  return (
    <div className="w-full m-auto h-dvh bg-white">
      <Router>
        <Navbar />

        <div className="w-4/5 m-auto">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/list' element={<RestaurantList />} />
            <Route path='/create' element={<RestaurantCreate />} />
            {/* <Route path='/update/:id' render={props => (<RestaurantUpdate {...props} />)} /> */}
            <Route path='/update/:id' element={<RestaurantUpdate />} />
            <Route path='/details' element={<RestaurantDetail />} />
            <Route path='/search' element={<RestaurantSearch />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </div>

      </Router>
    </div>
  );
}

export default App;
