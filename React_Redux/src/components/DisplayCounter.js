import { useSelector } from "react-redux";

const DisplayCounter = ({val})=>{

     const counter = useSelector(store=>store.counter)

     return(
          <p>{counter}</p>
     )
}

export default DisplayCounter;