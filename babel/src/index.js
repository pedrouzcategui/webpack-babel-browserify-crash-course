import React from "react";
import ReactDom from "react-dom";

export default function App(){
    return(
        <>
            <h1>Hello from react</h1>
        </>
    )
}

ReactDom.render(<App/>,document.getElementById('root'))