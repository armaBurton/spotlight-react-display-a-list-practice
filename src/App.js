import './App.css';
import DragonList from './DragonList';
// import your arrays here
import { dragonListOfStrings } from './dragons-list-of-strings';

function App() {
  return (
    <div className="App">
        Render all your lists here. Pass the arrays as props.
      <DragonList dragons={dragonListOfStrings} />
    </div>
  );
}

export default App;
