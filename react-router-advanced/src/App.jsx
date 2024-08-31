import BlogPost from './components/Blogpost';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import UserLogin from './auth/UserLogin';
import BlogPost from './components/Blogpost';
import ProtectedRoute from './components/ProtectedRoutes';


const App = () => {
  const isLoggedIn = false;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/userlogin" element={<UserLogin />} />
        <Route path="/profile/" element={
        <ProtectedRoute isLoggedIn={isLoggedIn}>
        <Profile />
        </ProtectedRoute >
        }>
        </Route>
        <Route path='/blog/:Id' element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;
