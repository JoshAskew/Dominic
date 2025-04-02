import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'
import ListingsPage from './pages/ListingsPage';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <a href="/">Home</a> | <a href="/listings">Listings</a>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/listings" element={<ListingsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;