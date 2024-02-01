import { useState } from "react";

export default function Player({ initialName, symbol }) {
  let [isEditing, setIsEditing] = useState(false);
  let [playerName, setPlayerName] = useState(initialName);

  function handleEditClick() {
    //funkcija kojom postavljmo stanje na true ili false , ako je false prikazace se ime igraca ako je true prikazace se input gde upisujemo ime igraca
    /** if(isEditing){
            setIsEditing(false);
        }
        else{
            setIsEditing(true);
        } */

    setIsEditing((prevIsEditing) => !prevIsEditing); //ovo je skracena verzija if else uslova koju sam kreirao iznad
  }

  function onHandleChange(event) {
    console.log(event.target.value);
    setPlayerName(event.target.value);
    //FUNKCIJA SE IZVRSAVA NA ONCHANGE I POSTAVLJA VREDNOST OBJEKTA (INPUT POLJA) KAO NOVO STANJE,A TO NOVO STANJE SE POSTAVLJA KAO IME IGRACA
  }

  return (
    <li>
      <span className="player">
        {!isEditing ? (
          <span className="player-name">{playerName}</span>
        ) : (
          <input
            type="text"
            required
            value={playerName}
            onChange={onHandleChange}
          />
        )}

        <span className="player-symbol">{symbol}</span>
        <button onClick={() => handleEditClick()}>
          {!isEditing ? "Edit" : "Save"}
        </button>
      </span>
    </li>
  );
}
