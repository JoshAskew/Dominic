import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'
// import ListingsPage from './pages/ListingsPage';
import Navbar from './components/Navbar';
import MortgageCalculator from './components/MortgageCalculator';
import MeetMyRealtor from './pages/MeetMyRealtor';

function App() {
  return (
    <Router>
        <Navbar />
        <Routes>

          <Route path="/" element={<HomePage />} />
          <Route path="/meet-my-realtor" element={<MeetMyRealtor />} />
          <Route path="/mortgage-calculator" element={<MortgageCalculator />} />
          
        </Routes>
    </Router>
  );
}

export default App;