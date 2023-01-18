import './App.css';
import Header from './components/header';
import Linkers from './components/linkers';
import Router from './components/router';

function App() {
  return (
    <div className="App">
      <Header/>
      <Router/>
      <Linkers/>
    </div>
  );
}

export default App;
