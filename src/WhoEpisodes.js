import WhoSeasons from './WhoSeason';

export default function WhoEpisodes(props){
  return (
    <li>
      <h3>{ props.doctor.doctor }</h3>
      <p>episodes: {props.doctor.episodes }</p>
      <p>Seasons:</p>{
        <ul>
          { 
            props.doctor.seasons.map((season, i) => <WhoSeasons key={`${season}${i}`} season={season} />)
          }
        </ul>
      }
      <p>Average Viewers: {props.doctor.episodes}</p>
    </li>
  );
}