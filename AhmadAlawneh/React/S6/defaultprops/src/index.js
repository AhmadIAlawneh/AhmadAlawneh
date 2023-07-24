import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
const customPersons = [
  { name: "Ahmad ", eyeColor: "brown", age: "22" },
  { name: "zayed", eyeColor: "deepblue", age: "40" },
];
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App persons={customPersons} />
  </React.StrictMode>
);
