import './App.css';
import CountdownTimer from './Components/CountdownTimer/CountdownTimer';

function App() {
  return (
    <div className="App">
     <CountdownTimer
     countdownTimestampMs={1735686000000}/>
    </div>
  );
}

export default App;
