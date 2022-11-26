import { Button } from "reactstrap";
import { useSelector, useDispatch } from 'react-redux'
import { login , logout} from '../store/AuthSlice';
const Car = (props) => {

    const isLoggedIn = useSelector((state) => state.authR.isLoggedIn)
    const data = useSelector((state) => state.authR.data)
    const dispatch = useDispatch()
    return (
      <div>
        {isLoggedIn && data.map((key)=>{
            return(
                 <div key={key}>Monster</div>
            )
           
        }) }
        {isLoggedIn && <h1>Brijesh</h1>}
        {!isLoggedIn && <h1>Sunita</h1>}
        <button
        aria-label="login"
        onClick={() => dispatch(login())}
        >
        Login
      </button>
      <button
        aria-label="logout"
        onClick={() => dispatch(logout())}
        >
        Logout
      </button>
      </div>
    );
  };
  export default Car;