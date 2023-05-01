import "./App.css";
import Car from "./car";
import Counter  from "./Components/Counter";
import AuthCompo from "./Components/Authcompo";
import sunitaimginApp from "./su.jpg";
import su2 from "./su2.jpg";
import su3 from "./su3.jpg";
import GitProfs from "./githubDatabase";
import SuCard from "./Card";
import Layout from "./Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cards from "./Cards"; 
const st = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 20, 21, 22];
// aading my mekdflksd
//adding one more comment
//addint other lines as well
//Add pull request to make changes authorising by myself
const ArrowFunc = (props) => {
  return (
    <div>
      <div class="text-center">
        <div class={props.sp} role="status">
          <span class="visually-hidden">Loading...</span>
          
        </div>
      </div>
      <Counter/>
      <AuthCompo/>
    </div>
  );
};

function App() {
  let a = 10;


  return (
    
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Layout />}>
              <Route index element={<GitProfs />} />
              <Route path="Brijesh" element={<ArrowFunc sp="spinner-grow" />} />
              <Route
                path="Sunita"
                element={<ArrowFunc sp="spinner-border" />}
              />
              {/* <Route path="*" element={<NoPage />} /> */}
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
      
    //   <div className="container text-center">
    //    { st.map((id)=>{
    //     return (
    //        <div className="row" key={id}>
              
               
    //          {
    //           st.map((idx)=>{
    //             return(

    //               <Cards className="col" style={{margin:"3px"}} key={idx}/>
    //             )
    //           })
    //          }
    //       </div>
    //     )
          
    //    })
        
    //     }
          
    
    //   </div>
    // </div>
  );
}

export default App;
