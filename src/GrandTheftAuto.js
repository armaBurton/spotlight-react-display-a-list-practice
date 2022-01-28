import GTARender from './GTARender';

export default function GrandTheftAuto(props){
  return <div>
    <h2>Grand Theft Auto List</h2>{
      props.GTAList.map((GTAList, i) => <GTARender key={`${GTAList}${i}`} GTAList={GTAList}/>)
    }
    
  </div>;
}