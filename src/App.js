import { Route, Routes } from 'react-router-dom';
import './App.css';
import AdminLayout from './Components/Layouts/AdminLayout';
import Login from './Containers/Login/Login';
import Posts from './Containers/Posts/Posts';
import Register from './Containers/Register/Register';
import { Users } from './Containers/Users/Users';
import { AuthenticatedRoutes, UnAuthenticatedRoutes } from './util/constant';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<AdminLayout/>}>
               <Route path={AuthenticatedRoutes.Home} element={<Users/>}></Route> 
               <Route path={AuthenticatedRoutes.User} element={<Users/>}></Route> 
               <Route path={AuthenticatedRoutes.Post} element={<Posts/>}></Route> 
          </Route>
          <Route path={UnAuthenticatedRoutes.Login} element={<Login/>}></Route>
          <Route path={UnAuthenticatedRoutes.Register} element={<Register/>}></Route>
      </Routes>
      {/* <AdminLayout></AdminLayout> */}
    </div>
  );
}

export default App;
