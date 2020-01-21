import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import HomeClass from './Home'
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

function App() {
  return (
    <div className="App">
      <h1>My First React App</h1>
      <HomeClass />
    </div>
  );
}

export default App;
