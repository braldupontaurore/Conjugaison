import logo from './logo.svg';
import './App.css';
import Verbe from './containers/verbe/verbe'
import { Route, Routes } from 'react-router-dom';
import NavBar from './containers/NavBar.jsx/NavBar';
import Present from './pages/present/present';
import Imparfait from './pages/imparfait/imparfait';
import Futur from './pages/futur/futur';


function App() {

  return (
    <div className="App">
      <h1>La conjugaison</h1>
      <NavBar></NavBar>
      <Verbe></Verbe> 
      <Routes>
        <Route path="/Présent"element={<Present/>}/>
        <Route path="/Futur"element={<Futur/>}/>
        <Route path="/Imparfait"element={<Imparfait/>}/>
      </Routes>
    </div>
  );
}

export default App;

{/* <Routes>
        <Route path="/Présent" element={<Present/>}/>
        <Route path="/Imparfait" element={<Imparfait/>}/>
        <Route path="/Futur" element={<Futur/>}/>
      </Routes> */}
