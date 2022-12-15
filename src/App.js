import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Menu } from './components/Menu';
import { Todos } from './components/Todos';

function App() {
  return (
    <div className="App">
        <Header />
        <Todos />
    </div>
  );
}

export default App;
