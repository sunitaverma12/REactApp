import "./App.css";
import Car from "./car";
import sunitaimginApp from "./su.jpg";
import su2 from "./su2.jpg";
import su3 from "./su3.jpg";
import GitProfs from "./githubDatabase";
import SuCard from "./Card";
import Layout from "./Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// aading my me
//Add pull request to make changes authorising by myself
const ArrowFunc = (props) => {
  return (
    <div>
     <div class="text-center">
  <div class={props.sp} role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>
    </div>
  );
};

function App() {
  let a = 10;
  const s = 90;

  return (
    <div>
      <BrowserRouter>
        
        <Routes>

          <Route>
          <Route path="/" element={<Layout />}>
          <Route index element={ <GitProfs />} />
          <Route path="Brijesh" element={<ArrowFunc sp="spinner-grow"/>} />
          <Route path="Sunita" element={<ArrowFunc sp="spinner-border"/>} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>            
          </Route>
        </Routes>

      </BrowserRouter>
      {/* <ArrowFunc message="00000000000000000000000" value="230"/> */}

      {/* <img src="https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg" className="SunitaCss"/>  */}

      {/* <Car name="Sunil" description="Sunita is also pagal" sunita={su3}/> */}
      {/* <GitProfs /> */}
    </div>
  );
}

export default App;
