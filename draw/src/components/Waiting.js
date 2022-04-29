import React from 'react'
import '../Styles/waiting.scss'
export default function Waiting() {
  return (
    <div className="loader">
        <h2 className="loader-header">Waiting for another player...</h2>
        <div className="loader-center">
            <div className="loader-pencil">
                <div className="loader-top"></div>
            </div>
            <div className="loader-stroke"></div>
        </div>
    </div>
  )
}
