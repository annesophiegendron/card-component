import React, { useState } from 'react'
import './card.css'

export const Card = (props) => {
  const [clicked, setClicked] = useState(false)

  if (!clicked) {
    return (
      <section className="card-container">

        <div className="cardTitle" style={{ backgroundColor: `${props.topColor}` }}>
          <h1 style={{ color: `${props.titleColor}` }}>{props.title}</h1>
          <span className="cardEmoji">{props.emoji}</span>
        </div>

        <div className="lightPart" style={{ backgroundColor: `${props.bottomColor}` }}>
          <p className="subtitleText">{props.subtitle}</p>
          <button className="cardButton" onClick={() => setClicked(true)} style={{ backgroundColor: `${props.buttonColor}`, color: `${props.buttonTextColor}` }}>{props.buttonText}</button>
        </div>

      </section>
    )
  } else {
    return (
      <section className="clicked-card">
        <div className="top" style={{ backgroundColor: `${props.topColor}` }}>
          <h1 style={{ color: `${props.titleColor}` }}>{props.title}</h1>
        </div>
        <div className="bottom" style={{ backgroundColor: `${props.bottomColor}` }}>
          <span className="cardEmoji">{props.emoji}</span>
        </div>
      </section>
    )
  }
}