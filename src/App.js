import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App text-center w-75 mx-auto">
      <header className="App-header text-center display-2">
        <img src={logo} className="App-logo img-fluid" alt="logo" />
      </header>
      <Dictionary />
      <footer className="text-center h6 mt-5">coded by Makarova Olena</footer>
    </div>
  );
}

export default App;
