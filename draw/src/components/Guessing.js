import React, { useRef, useState } from 'react'
import { ReactSketchCanvas } from 'react-sketch-canvas';
import '../Styles/guessing.scss'

export default function Guessing() {
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
  return (
    <div className="welcome-middle guessing">
    <form id="fancy-inputs" onSubmit={(e)=>{
      e.preventDefault()
      alert('submitted')
    }} >
    <h1 className='guessing-headline'>Guess the draw</h1>
    <ReactSketchCanvas
    width="90vw"
    height="50vh"
    strokeWidth={4}
    strokeColor="red"   
  />
    <label className="input">
    <input className='guessing-input' ref={nameRef} onBlur={()=>handleBlur()} type="text"/>
    <span><span style={{display:placeHolder}} >Guess the draw</span></span>
</label>
  <button className='guessing-btn'>Submit</button>
  </form>
  </div>
  )
}
