import './App.css';
import DragonList from './DragonList';
import AstronomicalEvents from './AstronomicalEvents';
import DrWhoList from './DrWhoList';
// import your arrays here
import { dragonListOfStrings } from './dragons-list-of-strings';
import { astronomicalEvents21stC } from './astronomical-events';
import { drWhoList } from './Dr-Who-List';

function App() {
  return (
    <div className="App">
        Render all your lists here. Pass the arrays as props.
      <DragonList dragons={dragonListOfStrings} />
      <AstronomicalEvents astro={astronomicalEvents21stC} />
      <DrWhoList whoList={drWhoList} />
    </div>
  );
}

export default App;
