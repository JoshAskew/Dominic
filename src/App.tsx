import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'
import ListingsPage from './pages/ListingsPage';
import Navbar from './components/Navbar';
import MortgageCalculator from './pages/MortgageCalculator';

function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/listings" element={<ListingsPage />} />
          <Route path="/mortgage-calculator" element={<MortgageCalculator />} />
        </Routes>
    </Router>
  );
}

export default App;