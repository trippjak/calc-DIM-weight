import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// Wait for DOM content to load
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('dim-weight-calculator');
    if (container) {
        const root = createRoot(container);
        root.render(<App />);
    }
});