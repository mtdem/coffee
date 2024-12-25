import './App.css';
import espresso_4x from './espresso_4x.png';

function App() {
  return (
    <div className="Espresso">
        <img src={espresso_4x} alt="Espresso" className="EspressoPhoto"/>
        <br />
        <a
          className="EspressoLink"
          href="https://www.youtube.com/watch?v=ZLBPm3RX0H0&ab_channel=Stefan"
          target="_blank"
          rel="noopener noreferrer"
        >
          Have Some Coffee
        </a>
    </div>
  );
}

export default App;
