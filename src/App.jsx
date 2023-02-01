import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';

export default function App() {
  return (
    <Router>
      <div className='flex flex-col justify-between h-screen'>
        <Routes>
          <Route path='/' element={<Navbar />} />
        </Routes>
        <main className='container mx-auto px-3 pb-12'>Content</main>
        <Footer />
      </div>
    </Router>
  );
}
