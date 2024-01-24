import logo from './logo.svg';
import Demo from './Components/Demo';
import './App.css';

function App() {
  return (
    <div className="App">
      <Demo name={"Hello World!"}>Setting Children props from App component</Demo>
    </div>
  );
}

export default App;
