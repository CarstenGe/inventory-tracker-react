import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Dashboard from './components/dashboard/Dashboard';
import Items from './components/items/Items';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/items" element={<Items />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
