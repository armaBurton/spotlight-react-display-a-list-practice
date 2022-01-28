import Console from './Console';
import Computer from './Computer';
import Handheld from './Handheld';
import Mobile from './Mobile';
import Other from './Other';

export default function Platforms(props){
  return <>
    <h5>Platforms:</h5>
    <Console console={props.platforms.console}/>
    <Computer computer={props.platforms.computer}/>
    <Handheld handheld={props.platforms.handheld}/>
    <Mobile mobile={props.platforms.mobile}/>
    <Other other={props.platforms.other}/>
  </>;
}
