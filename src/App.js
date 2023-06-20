import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components';
import { Home, Listing, NotFound, Profile, Auth } from './pages';
import { AuthContext } from './context/auth.context';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/listing' element={<Listing />} />
        <Route path='/listing/:slug' element={<Listing />} />
        <Route path='/profile/:profileid' element={<Profile />} />
        <Route path='/auth' element={<Auth/>} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
