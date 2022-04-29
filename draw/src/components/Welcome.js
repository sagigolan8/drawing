import React, { useEffect, useRef, useState } from 'react'
import '../Styles/welcome.scss'
import { useNavigate } from 'react-router-dom';
import Example from './Example';
import { errorNotification } from '../helpers/alerts';

export default function Welcome() {
    const navigate = useNavigate()
    const nameRef = useRef()
    const [placeHolder, setPlaceHolder] = useState('')
    const handleBlur = () =>{
        if(nameRef.current.value.length > 0 ){
            setPlaceHolder('none')
        }
        else{
            setPlaceHolder('')
        }
    }
  return ( //changed to form
  <>
      <form className="welcome" onSubmit={(e)=>{ 
        e.preventDefault()
        errorNotification('submitted','top-center')
      }}>
        <div className="welcome-middle">
            <h1 className='welcome-headline'>Draw & Guess</h1>
            <div id="fancy-inputs">
            <label className="welcome-label">
                <input className='welcome-input' ref={nameRef} onBlur={()=>handleBlur()}  type="text"/>
                <span><span style={{display:placeHolder}}>Name</span></span>
            </label>
            <button className="welcome-btn" >Start Game</button>  
            </div>
        </div>
    </form>
        <Example/>
        </>
  )
}





{/* <div className="word">book</div>
<div className="word">apple</div>
<div className="word">samsung</div>
</div> */}