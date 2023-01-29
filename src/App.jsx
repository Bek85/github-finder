import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';

export default function App() {
  return (
    <Router>
      <div className='flex flex-col justify-between h-screen'>
        <Routes>
          <Route path='/' element={<Navbar />} />
        </Routes>
        <main>Content</main>
      </div>
    </Router>
  );
}
