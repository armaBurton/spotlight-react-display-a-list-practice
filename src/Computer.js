import ComputerRender from './ComputerRender';

export default function Computer(props) {
  return <div>Computer: 
    {
      props.computer.map((computer, i) => 
        <ComputerRender key={`${computer}${i}`} computer={computer} />)
    }
  </div>;
}
