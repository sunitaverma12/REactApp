import axios from 'axios';
import { useState } from 'react';
import SuCard from './Card';
const GitProfs= ()=>{
    const brijeshdata='brijeshchauhan12';
    const check=false;
    const [user , updateuser]=new useState(brijeshdata);
    var [DatatoShow, updateDatatoShow]=new useState({login:"sunitaverma12",id:"90575699",html_url:"https://github.com/sunitaverma12", avatar_url:"https://avatars.githubusercontent.com/u/47671000?v=4"});
    const fetcher = async()=>{
        const resp= await axios.get(`https://api.github.com/users/${user}`);
        console.log(resp.data);
        updateDatatoShow(resp.data);
        console.log(DatatoShow.login);
        console.log(typeof(DatatoShow));
        check=true;
    }
    
    return(
        <div>
          <h1>This is for Api Call</h1>
          <input 
           type ="text" value={user} 
           onChange ={

               (event)=>updateuser(event.target.value)
            }
           placeholder="brijeshchauhan12"
            />
          <button onClick={fetcher}> Click to fetch the data</button>
         <SuCard Login={DatatoShow.login} Id={DatatoShow.id} Url={DatatoShow.html_url} Img={DatatoShow.avatar_url}/>
        </div>
    )
}
export default GitProfs;