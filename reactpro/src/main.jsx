import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

/* our application is render twice is because we are using the app component in strictmode this mode renders a component twice this done for the security purposes */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
