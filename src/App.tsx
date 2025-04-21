import "./css/App.css";
import AppRoutes from "./routes/AppRoutes";
import Background from "./components/Background";
import { HashRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <main className="app-content">
        <Router>
          <AppRoutes />
          <Background />
        </Router>
      </main>
    </div>
  );
}

export default App;
