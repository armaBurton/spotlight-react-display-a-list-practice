import HandheldRender from './HandheldRender';

export default function Handheld(props) {
  return <div>Handheld:
    {
      props.handheld.map((handheld, i) => 
        <HandheldRender key={`${handheld}${i}`} handheld={handheld} />)
    }
  </div>;
}
