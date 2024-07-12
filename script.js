import React from "react"
import ReactDOM from "react-dom"
import Header from "./header"
import Body from "./Body"
import Footer from "./Footer"

let MyWebPage=()=>{
    return (
        [<Header/>,<Body/>,<Footer/>]
    )
}

let root=document.getElementById("root")
let reactR=ReactDOM.createRoot(root)
reactR.render(<MyWebPage/>)