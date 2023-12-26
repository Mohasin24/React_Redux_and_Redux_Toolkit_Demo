import React, { useRef } from 'react';
import DisplayCounter from './DisplayCounter'
import Button from './Button'
import Actions from '../store/Actions';
import { useSelector } from 'react-redux';

const Container = ()=>{

     const inputElem = useRef(0)
  
     const counterVal = useSelector(store=>store.counter)

     return(
          <section className="cnt-sec">
               <DisplayCounter val={counterVal}/>
               <Button btnVal ={`+`} operation={Actions.INCREMENT} />
               <Button btnVal ={`RESET`} operation={Actions.RESET} />
               <Button btnVal ={`-`} operation={Actions.DECREMENT} />

               <div>
                    <input ref={inputElem} type='text'placeholder='Enter number...'/>
                    <Button btnVal={`ADD`} operation={Actions.ADDITION} val={inputElem} />
                    <Button btnVal={`SUB`} operation={Actions.SUBSTRACT} val={inputElem}/>
               </div>
          </section>
     )
}

export default Container;