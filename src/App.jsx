import Header from "./components/Header";
import headerLogo from "/game-logo.png";
import Player from "./components/Player";

function App() {
  

  return (
    <>
    <Header
   text={"Tic-Tac-Toe"}
    image={headerLogo} 
    alternative={"Hand drawn tic tac toe logo"}/>
    
    <main>
      <div id="game-container">
        <ol id="players">
        <Player name={"Milan"} symbol={"X"}/>
        <Player name={"Sandra"} symbol={"O"}/>
          
        </ol>
      </div>
    </main>
    </>
      
    
   

    
  );
  
}

export default App
