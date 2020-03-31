import React from 'react'
import './app.css'
import { Card } from './Card'

export const App = () => {

  return (
    <div className="app-container">
      <Card
        title='lemon'
        buttonText='order now'
        emoji='🍋'
        subtitle='This is a really tasty fruit'
        titleColor='#166F39'
        buttonColor='#FCED84'
        buttonTextColor='#000000'
        topColor='#8CFFBA'
        bottomColor='#CFFFE2'
      />

      <Card
        title='rocket'
        buttonText='book seat'
        emoji='🚀'
        subtitle='Join us into the outter space'
        titleColor='#000000'
        buttonColor='#0B0C11'
        buttonTextColor='#FFD600'
        topColor='#A6CFE2'
        bottomColor='#C2DCE9'
      />

      <Card
        title='doggy'
        buttonText='adopt me'
        emoji='🐶'
        subtitle='Hello, do you want to be friends?'
        titleColor='#502F7E'
        buttonColor='#FFFFFF'
        buttonTextColor='#502F7E'
        topColor='#EEB200'
        bottomColor='#FFE086'
      />

    </div>
  )
}