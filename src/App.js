import logo from './logo.svg';
import './App.css';
import Random from "./components/Random";
import Tag from "./components/Tag";

function App() {
  return (
    <div className="App background">
    <h1 className='main-heading'>RANDOM GIFS</h1>
    <div className="components-box">
      <Random/>
      <Tag/>
    </div>
    </div>
  );
}

export default App;
