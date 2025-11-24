import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddOnPage from './pages/AddOnPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-on" element={<AddOnPage />} />
      </Routes>
    </Router>
  );
}

export default App;
