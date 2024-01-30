import { useState } from "react";

export default function Player({name,symbol}){
    let [isEditing, setIsEditing] = useState(false);
    let [buttonLabel,setButtonLabel] = useState("Edit");


    function handleEditClick(){
        if(isEditing){
            setIsEditing(false);
        }
        else{
            setIsEditing(true);
        }

        if(buttonLabel === "Edit"){
            setButtonLabel("Save");
        }else{
            setButtonLabel("Edit");
        }
        console.log("hello");
    }
    return(
        <li>
            <span className="player">
                {isEditing === false ? <span className="player-name">{name}</span> : <input type="text" required/>}
            
            <span className="player-symbol">{symbol}</span>
            <button onClick={()=>handleEditClick()}>{buttonLabel}</button>
            </span>
          </li>
    );

}  