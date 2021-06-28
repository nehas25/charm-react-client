import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { withRouter } from 'react-router-dom';
import Routes from './config/routes';
import NavBar from './components/NavBar';
import { useState } from 'react';
import { useEffect } from 'react';
import {Nav, Card} from 'react-bootstrap';


function App() {
  const [bagItemsCount, setBagItemsCount] = useState(null);
  const [token, setToken] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  function updateItemsCount() {
    const bagItems = JSON.parse(localStorage.getItem('bagItems'));
    if(bagItems) {
      const count = JSON.parse(localStorage.getItem('bagItems')).length;
      console.log('items count ==== ', count);
      setBagItemsCount(count);
    }
  }

  useEffect(() => {
    updateItemsCount();
  });

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedUsername = localStorage.getItem('username');

    if (storedToken) {
      setToken(storedToken );
      console.log('Token is set to ', storedToken);
      setIsLoggedIn(true);
    }

    if(storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const addToken = (usersToken) => {
    localStorage.setItem('token', usersToken);
    setToken( usersToken );
  }

  const handleSuccessfulLogin = (username) => {
    localStorage.setItem('username', username);
    setIsLoggedIn(true);
    setUsername(username);
  }

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('token');
    localStorage.removeItem('username');
  }

  return (
    <>
      <div class="wrapper-all-pages">
        <Nav.Link href="/" className="title-bar"><h1>Charm</h1></Nav.Link>
        <NavBar 
          bagItemsCount={bagItemsCount} 
          token={token} 
          addToken={addToken} 
          isLoggedIn={isLoggedIn} 
          handleSuccessfulLogin={handleSuccessfulLogin}
          handleLogout={handleLogout}
          username={username}
        />
        <Routes updateItemsCount={updateItemsCount} />
      </div>
      <Card.Footer className="text-muted">&copy; 2021 Charm</Card.Footer>
    </>
  );
}

export default withRouter(App);
