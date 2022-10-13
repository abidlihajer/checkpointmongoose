
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Users from './pages/Users';
import AddUser from './pages/AddUser';
import EditUser from './pages/EditUser';



function App() {
  return (
    <div className="App">
     <NavBar/>
     <Routes>
      <Route path='/' element={<Home  />}/>
      <Route path='/users' element={<Users  />}/>
      <Route path='/adduser' element={<AddUser  />}/>
      <Route path='/edit' element={<EditUser  />}/>
      
     </Routes>
    </div>
  );
}

export default App;
