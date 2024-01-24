import logo from "./logo.svg";
import Demo from "./Components/Demo";
import "./App.css";
import DemoContext from "./DemoContext";

function App() {
  return (
    <DemoContext.Provider
      value={{ value: "This value is coming from DemoContext" }}
    >
      <div className="App">
        <Demo name={"Hello World!"}>
          Setting Children props from App component
        </Demo>
      </div>
    </DemoContext.Provider>
  );
}

export default App;
