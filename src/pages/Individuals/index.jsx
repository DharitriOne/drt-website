import { Routes, Route } from 'react-router-dom';
import GetStarted from '../../pages/Individuals/GetStarted.js'
import React from 'react';

const App = () => {
  return (
    <Routes>
        <GetStarted />
        <Route path="../../pages/Individuals/GetStarted.js" element={<GetStarted />} />
      {/* Add other routes */}
    </Routes>
  );
};

export default App;
