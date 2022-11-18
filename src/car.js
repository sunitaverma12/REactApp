//  import sunita from '../src/su.jpg';
const Car = (props) => {
  return (
    <div>
      <div> Brijesh is pagal</div>
      <img src={props.sunita} style={{ width: "20%", height: "50%" }}></img>
      <h1>Name:{props.name}</h1>
      <h2>Description:{props.description}</h2>
    </div>
  );
};
export default Car;
