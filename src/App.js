import './App.css';
import Welcome from './Welcome.js';
import Counter from './Counter.js';
import NameForm from './NameForm.js';
import Tabs from './Tabs.js';


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
