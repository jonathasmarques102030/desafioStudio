import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Home';
import Livro from './Livro';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/livro/:bookId' element={<Livro />} />
      </Routes>
    </Router>
  );
}
export default AppRouter;