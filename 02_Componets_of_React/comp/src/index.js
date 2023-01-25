import React from "react"
import ReactDom from "react-dom"

function Header()
{
  return <div><h1> This is my Heading </h1></div>
}

ReactDom.render( <div> <Header></Header> <Header></Header> </div> ,  document.getElementById("root"))
