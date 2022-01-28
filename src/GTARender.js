import Platforms from './Platforms';

export default function GTARender(props){
  return <>
    <h3>{props.GTAList.title}, {props.GTAList.year}</h3>
    <p className='developer'>{props.GTAList.developer}</p>
    <>
      {
        <Platforms platforms={props.GTAList.platforms} />
      }
    </>
  </>;
}