import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Footer, Header } from './components';
import { Home, Listing, NotFound, Profile, Auth } from './pages';
import { AuthContext } from './context/auth.context';
import './App.css';

function App() {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        {
          isAuthenticated ? (
            <>
              <Route path='/listing' element={<Listing />} />
              <Route path='/listing/:slug' element={<Listing />} />
              <Route path='/profile/:profileid' element={<Profile />} />
            </>
          ) : (
            <>
            </>
          )
        }
        <Route path='/auth' element={<Auth />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
