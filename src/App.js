import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import UserDashboard from './pages/UserDashboard';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';
import ViewProfile from './pages/ViewProfile';
import ViewMore from './pages/ViewMore';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/login/user_dashboard' element={<UserDashboard/>}></Route>
        <Route path='/login/user_dashboard/user_profile' element={<Profile/>}></Route>
        <Route path='/login/user_dashboard/user_profile/user_edit' element={<EditProfile/>}></Route>
        <Route path='/view_more' element={<ViewMore/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
