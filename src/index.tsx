import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/index.scss';
import App from './App';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container!); // The non-null assertion operator is used here
root.render(<App/>);
