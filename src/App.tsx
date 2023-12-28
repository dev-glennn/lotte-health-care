import React from 'react';
import { AppRoutes } from './layouts/AppRoutes';
import { BrowserRouter } from 'react-router-dom';
import { Container, Content } from './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className={Container}>
        <div className={Content}>
          <AppRoutes />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
