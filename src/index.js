import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './Login';
import Inscription from './Inscription'
import Admin from './Admin';
import ModalDescription from './Modal_description';


const Index = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/Login' element={<Login />}/>
        <Route path='/Inscription' element={<Inscription />} />
        <Route path='/Admin' element={<Admin />} />
        <Route path='/ModalDescription' element={<ModalDescription />} />
      </Routes>
    </Router>
  );
}
ReactDOM.render(
    <React.StrictMode>
      <Index />
    </React.StrictMode>,
  document.getElementById('root')
);


