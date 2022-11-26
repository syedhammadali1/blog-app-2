import { Route, Routes } from 'react-router-dom';
import './App.css';
import AdminLayout from './Components/Layouts/AdminLayout';
import AuthenticatedRoutes from './Components/Routes/AuthenticatedRoutes';
import UnAuthenticatedRoutes from './Components/Routes/UnAuthenticatedRoutes';
import Login from './Containers/Login/Login';
import Posts from './Containers/Posts/Posts';
import Register from './Containers/Register/Register';
import { Users } from './Containers/Users/Users';
import AuthService from './services/auth.service';
import { AuthenticatedRoutesConstant, UnAuthenticatedRoutesConstant } from './util/constant';

function App() {
  return (
    <div className="App">
      {AuthService.isTokenExist() ? 
      <AuthenticatedRoutes></AuthenticatedRoutes> : 
      <UnAuthenticatedRoutes></UnAuthenticatedRoutes>
}
      
    </div>
  );
}

export default App;
