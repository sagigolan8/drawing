import React from 'react'
import { errorNotification, infoNotification, successNotification } from '../helpers/alerts'
import '../Styles/words.scss'
export default function ChooseWords() {
  return (
    <div className="words-wrapper">
       <h1 className='words-headline'>Choose Word</h1>
        <div className="words-container">
            <div onClick={()=>successNotification('You chose easy👌','bottom-right')} className="words-card easy">
                Book
                <br /> 
                <br /> 
                Points - 1 
            </div>
            <div onClick={()=>infoNotification('You chose medium','bottom-left')} className="words-card medium">
                apple 
                <br /> 
                <br /> 
                Points - 3
            </div>
            <div onClick={()=>errorNotification('You chose hard','top-center')} className="words-card hard">
                samsung 
                <br /> 
                <br /> 
                Points - 5
            </div>
        </div>
        </div>
  )
}
