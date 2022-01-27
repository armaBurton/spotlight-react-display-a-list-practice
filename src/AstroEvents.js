export default function AstroEvents({ date, event }){
  return (
    <li>
      <p>Date: {date}</p>
      <p>Event: {event}</p>
    </li>
  );
}