import logo from './logo.svg';
import './App.css';
import TicTacToe from './components/TicTacToe';

function App() {
  return (
    <div className="App">
      <header></header>
      <main>
        <TicTacToe boardSize={3} />
      </main>
    </div>
  );
}

export default App;
