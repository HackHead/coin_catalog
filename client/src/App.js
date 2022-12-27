import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Coin } from './pages/Coin';
import { Catalog } from './pages/Catalog'
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/coin/:id" element={<Coin/>}/>
      <Route path="/catalog" element={<Catalog/>}/>
    </Routes>
  );
}

export default App;
