import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router basename="/portfolio">
      <div className="App">
        <h1>Hello World</h1>
      </div>
    </Router>
  );
}

export default App;
