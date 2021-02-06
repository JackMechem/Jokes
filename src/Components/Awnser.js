import React from "react"



function Awnser(prefs){
  

    
    return(<div className="awnser">

        <button className="awnser-button" onClick={ShowAwnser}>Show Awnser</button>

    </div>)
    function ShowAwnser(){
        alert(prefs.Awnser)
    }
    
}



export default Awnser;
