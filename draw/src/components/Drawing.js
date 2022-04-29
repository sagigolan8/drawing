import React, { useRef, useState } from 'react'
import { ReactSketchCanvas } from 'react-sketch-canvas';
import '../Styles/drawing.scss'
import { MdDelete } from 'react-icons/md'
import { AiOutlineUndo, AiOutlineRedo } from 'react-icons/ai'

const styles = {
  border: '0.0625rem solid #9c9c9c',
  borderRadius: '0.25rem',
};

export default function Drawing() {
  const [color, setColor] = useState('black')
  const [size, setSize] = useState(4)
  const colorRef = useRef()
  const sizeRef = useRef()
  const colorSelected = () => {
    const brushColor = colorRef.current.value
    setColor(brushColor)
}
  const sizeSelected = () => {
    const brushSize = sizeRef.current.value
    setSize(brushSize)
}
  return (
    <div className='drawing' >
    <h1 className='drawing-headline' >Drawing - Book</h1>
    <ReactSketchCanvas
    width="90vw"
    height="50vh"
    strokeWidth={size}
    strokeColor={color}
  />
  <div className="drawing-btns">
    <button><MdDelete/></button>
    <button><AiOutlineUndo/></button>
    <button><AiOutlineRedo/></button>
  </div>
  <div className='pick-color-wrapper'>
  <p className='pick-color'> Pick Brush color / size</p>
  <div className="brush-settings">
    <input ref={colorRef} onChange={()=>colorSelected()} className="brush-color" type="color"/>
    <input ref={sizeRef} onChange={()=>sizeSelected()} className="brush-size" type="range" defaultValue={4} min="1" max="50"/>
  </div>
  <button className='btn'>Submit</button>
  </div>
  </div>
  )
}
