import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { withRouter, NavLink } from 'react-router-dom';
import Routes from './config/routes';
import NavBar from './components/NavBar';
import MainArea from './components/home/MainArea';
import DressIndexPage from './pages/DressIndexPage';


function App() {
  
  return (
    <div>
      <NavLink exact to="/"><h1>Charm</h1></NavLink>
      <NavBar/>
      <Routes />
      {/* <MainArea /> */}
      {/* <DressIndexPage /> */}
    </div>
  );
}

export default withRouter(App);
