import { useDispatch } from "react-redux";
import "../App.css";
import { counterActions } from "../store/slices/Counter";

const Button = ({ btnVal, val }) => {

  const dispatch = useDispatch();

  const updateCounter = () => {
    
    if(btnVal === '+')
    {
      dispatch(counterActions.increment())
    }
    else if(btnVal==='-')
    {
      dispatch(counterActions.decrement())
    }
    else if(btnVal==='RESET')
    {
      dispatch(counterActions.reset())
    }
    else if(btnVal==='ADD')
    {
      dispatch(counterActions.addition({num:val.current.value}))
      val.current.value='';
    }
    else if(btnVal==='SUB')
    {
      dispatch(counterActions.substraction({num:val.current.value}))
      val.current.value='';
    }

  };

  return (
    <button
      className={`btn ${btnVal === 'RESET' ? "btn-reset" : "btn-op"}`}
      onClick={updateCounter}
    >
      {btnVal}
    </button>
  );
};

export default Button;
