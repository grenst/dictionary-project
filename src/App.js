import logo from "./logo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header text-center display-2">
        <a href="/" className="text-success text-decoration-none">
          TEST Hello
        </a>
        <img src={logo} className="App-logo img-fluid" alt="logo" />
      </header>
    </div>
  );
}

export default App;
