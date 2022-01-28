import './App.css';
import DragonList from './DragonList';
import AstronomicalEvents from './AstronomicalEvents';
import DrWhoList from './DrWhoList';
import GrandTheftAuto from './GrandTheftAuto';

// import your arrays here
import { dragonListOfStrings } from './dragons-list-of-strings';
import { astronomicalEvents21stC } from './astronomical-events';
import { drWhoList } from './Dr-Who-List';
import { grandTheftAutoList } from './Grand-Theft-Auto-List';

function App() {
  return (
    <div className="App">
        Render all your lists here. Pass the arrays as props.
      <DragonList dragons={dragonListOfStrings} />
      <AstronomicalEvents astro={astronomicalEvents21stC} />
      <DrWhoList whoList={drWhoList} />
      <GrandTheftAuto GTAList={grandTheftAutoList} />
    </div>
  );
}

export default App;
