import logo from './logo.svg';
import './App.css';

import { Route, Routes } from 'react-router-dom';
import NavBar from './containers/NavBar.jsx/NavBar';
import Present from './pages/present/present';
import Imparfait from './pages/imparfait/imparfait';
import Futur from './pages/futur/futur';
import Verbe from './containers/verbe/verbe';

function App() {

  return (
    <div className="App">
      <h1>La conjugaison</h1>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Verbe/>}/>
        <Route path="/Présent"element={<Present/>}/>
        <Route path="/Futur"element={<Futur/>}/>
        <Route path="/Imparfait"element={<Imparfait/>}/>
      </Routes>
    </div>
  );
}

export default App;

