// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;




import React from 'react';
// import './App.css';
import Bg from './img/bg.jpg'

function App() {
  return (
    <div className="App">
      <div className='BGimg'>
        <img src={Bg} height={100} alt="compound-stack" />
      </div>

      <main className="p-4">
        <p className="text-lg">
          This is a sample React application styled with Tailwind CSS.
        </p>
      </main>
    </div>
  );
}

export default App;
