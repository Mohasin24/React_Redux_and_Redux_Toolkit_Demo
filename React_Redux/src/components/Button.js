import { useDispatch } from "react-redux";
import "../App.css";
import Actions from "../store/Actions";

const Button = ({ operation, btnVal, val}) => {
  const dispatch = useDispatch();

  const updateCounter = () => {
    switch (operation) {
      case Actions.INCREMENT:
        dispatch({ type: Actions.INCREMENT });
        break;
      case Actions.DECREMENT:
        dispatch({ type: Actions.DECREMENT });
        break;
      case Actions.RESET:
        dispatch({ type: Actions.RESET });
        break;
      case Actions.ADDITION:
        dispatch({ type: Actions.ADDITION, payload:{num:val.current.value} });
        val.current.value='0'
        break;
      case Actions.SUBSTRACT:
        dispatch({ type: Actions.SUBSTRACT, payload:{num:val.current.value} });
        val.current.value='0'
        break;
      default:
        break;
    }

  };

  return (
    <button
      className={`btn ${operation === Actions.RESET ? "btn-reset" : "btn-op"}`}
      onClick={updateCounter}
    >
      {btnVal}
    </button>
  );
};

export default Button;
