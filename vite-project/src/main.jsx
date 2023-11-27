import React, { createElement } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
let anotherElement = <a href="">visitnow</a>



let chai = "chai aur code"
let CreateElementr = React.createElement(
  "a",
  {
    href: "https//google.com"
  },
  "VisitNow "  ,
  chai
)

ReactDOM.createRoot(document.getElementById('root')).render(
CreateElementr
  
)
