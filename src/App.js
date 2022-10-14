import logo from './logo.svg';
import './App.css';
import NavBar from './containers/NavBar.jsx/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Present from './pages/present/present';
import Imparfait from './pages/imparfait/imparfait';
import Futur from './pages/futur/futur';
import Verbe from './containers/verbe/verbe';




function App() {

  return (
    <div className="App">
      <h1>Conjuguer à l'indicatif.</h1>
      <NavBar></NavBar>
      <Verbe></Verbe>
      <Routes>
        <Route path="/Présent" element={<Present/>}/>
        <Route path="/Imparfait" element={<Imparfait/>}/>
        <Route path="/Futur" element={<Futur/>}/>
      </Routes>
    </div>
  );
}

export default App;
