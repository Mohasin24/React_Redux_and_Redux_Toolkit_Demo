import { useSelector } from "react-redux";

const DisplayCounter = ()=>{

     const {counterVal} = useSelector((store) => store.counter);

     return(
          <p>{counterVal}</p>
     )
}

export default DisplayCounter;