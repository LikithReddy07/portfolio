import './css/App.css';
import HomePage from './views/HomePage';
import Background from "./components/Background";

function App() {
  return (
    <div className="App">
      <main className="app-content">
        <Background />
        <HomePage />
      </main>
    </div>
  );
}

export default App;
