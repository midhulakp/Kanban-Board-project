import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { KanbanProvider } from './context/KanbanContext';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <KanbanProvider>
      <App />
    </KanbanProvider>
  </StrictMode>
);