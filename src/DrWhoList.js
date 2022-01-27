import WhoEpisodes from './WhoEpisodes';

export default function DrWhoList(props){
  return <div className="dr-who-list">
    <h2>Doctor Who List</h2>
    <ul>
      {
        props.whoList.map((doctor, i) => 
          <WhoEpisodes key={`${doctor}${i}`} doctor={doctor} />
        )
      }
    </ul>
  </div>;
}