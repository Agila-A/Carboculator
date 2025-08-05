import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { EmissionProvider } from './Components/Users/Context/EmmissionContext.jsx'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EmissionProvider>
      <App />
    </EmissionProvider>
  </StrictMode>
);
