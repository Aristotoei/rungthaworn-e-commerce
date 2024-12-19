import './App.css';
import Header from './components/Header';
import ItemData from './components/ItemData';
import Nav from './components/Nav';
import Slides from './components/Slides';

function App() {
  return (
    <div className='App'>
      <Header />
      <Nav />
      <Slides />
      <ItemData />
    </div>
  );
}

export default App;
