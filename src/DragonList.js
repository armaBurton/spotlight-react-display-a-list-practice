import Dragons from './Dragons';

export default function DragonList(props){
  return <div className="dragon-list">
    <h2>List of Dragons, pre 1900&apos;s</h2>
    <ul>
      {
        props.dragons.map((dragon, i) => 
          <Dragons key={i} dragon={dragon} />
        )
      }
    </ul>
  </div>;
}