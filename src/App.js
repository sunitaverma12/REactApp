import  './App.css';
import Car from './car';
import sunitaimginApp from './su.jpg';
import su2 from './su2.jpg';
import su3 from './su3.jpg';
import  GitProfs from './githubDatabase';
import SuCard  from './Card';
//Adding some line from Brijesh
const ArrowFunc=(props)=>{




             return (
               <div>

               
                   <div>Returning the argument + {props.message}</div>
                   <div>{props.value}</div>

               </div>    
             ) ;  



            }





function App() {

  let a=10;
  const s=90;


  return (
    <div>

                 <ArrowFunc message="00000000000000000000000" value="230"/>
            
               

                 {/* <img src="https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg" className="SunitaCss"/>  */}
             
                 {/* <Car name="Sunil" description="Sunita is also pagal" sunita={su3}/> */}
                 <GitProfs/>

    </div>
  )

}

export default App;
