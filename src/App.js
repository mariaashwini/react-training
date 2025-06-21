import './App.css';
import Welcome from './components/Day01_Props/Welcome.js';
import Counter from './components/Day02_UseState/Counter.js';
import NameForm from './components/Day02_UseState/NameForm.js';
import Tabs from './components/Day02_UseState/Tabs.js';


function App() {
  return (
    <div className="App">
      <Welcome name="Maria"/>
      <Welcome name="Ashwini"/>
      <Counter/>
      <NameForm/> 
      <Tabs/>
    </div>
  );
}

export default App;
