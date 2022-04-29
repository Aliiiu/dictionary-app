import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { WordContextProvider } from './store/word-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <WordContextProvider>
      <App />
    </WordContextProvider>
    
);

