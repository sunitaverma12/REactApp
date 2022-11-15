import  './Card.css';

const SuCard=(props)=>{
    return (
       <div className="card">
           <div>
           <h4>{props.Login}</h4>
           <h4>{props.Id}</h4>
           <a href={props.Url}>Go my profile </a>
           </div>
           <div> 
               <img src={props.Img} alt="Avatar" style={{width:"33%",height:"20%",float:"right", marginTop:"-138px", borderRadius:"60px"}}/>
           </div>
       </div>

    )
}
export default SuCard;