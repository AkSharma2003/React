import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

// const anotherElement = (
//   <a href='https://google.com'>Visit Google</a>
// )

const anotherElement2 =React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'click Here to vist Google'
)

createRoot(document.getElementById('root')).render(
  anotherElement2
)
