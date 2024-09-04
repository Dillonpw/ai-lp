import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import '@fontsource/press-start-2p';
import '@fontsource-variable/public-sans';



createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>
);
