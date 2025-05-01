
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from './theme/ChakraProvider';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import your pages here
import Landing from './pages/Landing';
import Home from './pages/Home';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          {/* Add other routes as needed */}
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
