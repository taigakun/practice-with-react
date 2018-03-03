import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Chatbot from './Chatbot';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Chatbot />, document.getElementById('root'));
registerServiceWorker();
