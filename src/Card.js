import  './Card.css';

const SuCard=(props)=>{
    return (
       <div className="card">
           <div>
           <h4>this is my login :{props.Login}</h4>
           <h4>this is my id :{props.Id}</h4>
           <a href={props.Url}>go my profile </a>
           </div>
           <div> 
               <img src={props.Img} alt="Avatar" style={{width:"25%",height:"25%"}}/>
           </div>
       </div>

    )
}
export default SuCard;