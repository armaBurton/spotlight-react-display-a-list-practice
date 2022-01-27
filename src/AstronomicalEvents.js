import AstroEvents from './AstroEvents';

export default function AstronomicalEvents(props){
  return <div className="astronomical-events">
    <h2>Near-Future Astronomical Events</h2>
    <ul>
      {
        props.astro.map((event, i) => <AstroEvents key={`${event.date}${i}`} {...event} />
        )
      }
    </ul>
  </div>;
}