import ConsoleRender from './ConsoleRender';

export default function Console(props){
  return <>Console:
    {
      props.console.map((console, i) => 
        <ConsoleRender key={`${console}${i}`} console={console} />)
    }
  </>;
}