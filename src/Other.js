import OtherRender from './OtherRender';

export default function Other(props) {
  return <div>Other:
    {
      props.other.map((other, i) => 
        <OtherRender key={` ${other}${i}`} other={other} />)
    }
  </div>;
}
