import MobileRender from './MobileRender';

export default function Mobile(props) {
  return <div>Mobile:
    {
      props.mobile.map((mobile, i) => 
        <MobileRender key={`${mobile}${i}`} mobile={mobile} />)
    }
  </div>;
}
