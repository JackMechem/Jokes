import React from "react";
import Question from "./Question";
import Awnser from "./Awnser"
import "./Componets.css"





function JokeCard(prefs){
    

    if (prefs.Awnser === null){
        return(<div className="Joke-Card">
        
        <Question Question={prefs.question}/>
        
    </div>)
    }else {
        return(<div className="Joke-Card">
        
        <Question Question={prefs.question}/>

        
        <Awnser Awnser={prefs.awnser}/> 
        
    </div>)
    }
    
}

export default JokeCard;