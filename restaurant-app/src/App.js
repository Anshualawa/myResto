import './App.css';
import {
  BrowserRouter as Router, Route, Routes, Navigate
} from 'react-router-dom';
import Home from './component/Home';
import RestaurantList from './component/RestaurantList';
import RestaurantCreate from './component/RestaurantCreate';
import RestaurantUpdate from './component/RestaurantUpdate';
import RestaurantSearch from './component/RestaurantSearch';
import RestaurantDetail from './component/RestaurantDetail';
import Login from './component/Login';
import Logout from './component/Logout';
import Protected from './component/Protected';

function App() {

  return (
    <div className="w-full m-auto h-dvh bg-white">
      <Router>
        <Routes>
          <Route path="*" element={<Navigate to="/" />} />
          <Route path='/' element={<Home />} />
          <Route path='/list' element={<RestaurantList />} />
          {/* <Protected exact path="/" component={RestaurantList}/> */}

          <Route path='/create' element={<RestaurantCreate />} />
          <Route path='/update/:id' element={<RestaurantUpdate />} />
          <Route path='/details' element={<RestaurantDetail />} />
          <Route path='/search' element={<RestaurantSearch />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
