import React, { Component } from 'react';
import TitreH1 from "./Components/Titres/TitreH1";
import Bouton from "./Components/Bouton/Bouton";
import Paris from "./Containers/Pari/Paris"

class App extends Component {

    handleClickAjoutLivre = () => {
        console.log("Ajout d'un livre")
    }
    render()
    {
        return (
            <div className="container">
                <TitreH1>Tableau des paris</TitreH1>
                <Paris></Paris>
                <Bouton
                    typeBtn="btn-success"
                    click={() => console.log("Ajouter")}
                    css="w-100">Ajouter
                </Bouton>
            </div>
        );
    }
}

export default App;
