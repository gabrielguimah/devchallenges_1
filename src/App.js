import Scarecrow from './Scarecrow.png';
import './App.css';

function App() {
  return (
    <body>
      <div className="container">
        <header>
          <h2>404 NOT FOUND</h2>
        </header>
        <div className="content"> 
          <img src={Scarecrow} alt="Scarecrow"/>
          <div className="information">
            <h1>I have bad news for you</h1>
            <p>The page you are looking for might be removed or is temporarily unavailable</p>
            <button>Back to home</button>
          </div>
        </div>
      </div>
      <footer>
        <p>created by gabrielguimah - devChallenges.io</p>
      </footer>
    </body>
  );
}

export default App;
