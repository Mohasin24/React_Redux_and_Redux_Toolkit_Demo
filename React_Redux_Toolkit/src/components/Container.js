import React, { useRef } from 'react';
import DisplayCounter from './DisplayCounter'
import Button from './Button'


const Container = ()=>{

     const inputElem = useRef(0)

     return(
          <section className="cnt-sec">
               <DisplayCounter/>
               <Button btnVal ={`+`}/>
               <Button btnVal ={`RESET`}/>
               <Button btnVal ={`-`}/>

               <div>
                    <input ref={inputElem} type='text'placeholder='Enter number...'/>
                    <Button btnVal={`ADD`} val={inputElem} />
                    <Button btnVal={`SUB`} val={inputElem}/>
               </div>
          </section>
     )
}

export default Container;