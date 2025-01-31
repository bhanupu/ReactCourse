import React from 'react';
import ReactDOM from 'react-dom/client';
import Greeting from './Bhanu';
import App from './Bhanu'


const data = ReactDOM.createRoot(document.querySelector("#message"));
data.render(
  <Greeting />,
  <App />
)