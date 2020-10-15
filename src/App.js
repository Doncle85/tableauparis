import React from 'react';
import TitreH1 from "./Components/Titres/TitreH1";
import Bouton from "./Components/Bouton/Bouton"

function App() {
  return (
   <div className="container">
     <TitreH1>Tableau des paris</TitreH1>
       <div>Paris</div>
       <Bouton typeBtn="btn-success" click={() => console.log("Ajouter")}>Ajouter</Bouton>
       <Bouton typeBtn="btn-danger" click={() => console.log("Supprimer")}>Supprimer</Bouton>

   </div>
  );
}

export default App;
