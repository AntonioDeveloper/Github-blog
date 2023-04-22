import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { DefaultLayout } from './DefaultLayouts';
import { Home } from './pages/Home/Home';
import { IssuePage } from './pages/IssuePage/IssuePage';



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
