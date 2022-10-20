import React from "react"
import './App.css';
import LessText from "./LessText";

function App(){
  return(
    <div className="App">
      <LessText 
        text="aakjmadkjdljdlajdaskdljdja a adjskjdjadj adjaljdajdaj adieajijajlja  dljdlajdaskdljdja a adjskjdjadj adjaljdajdaj adieajijajl dljdlajdaskdljdja a adjskjdjadj adjaljdajdaj adieajijajlja ajja aj"
        max={40}
      />
    </div>
  )
}

export default App