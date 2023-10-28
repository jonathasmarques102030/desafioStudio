import React from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';

import Home from './Home';
import Livro from './Livro';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/livro' element={<Livro />} />
      </Routes>
    </Router>
  );
}
export default AppRouter;