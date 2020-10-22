import React, { Component } from 'react';
import TitreH1 from "./Components/Titres/TitreH1";
import Bouton from "./Components/Bouton/Bouton";
import Paris from "./Containers/Pari/Paris"

class App extends Component {
    state = {
        ajoutPari : false
        //Booléen initialisé à false parce que au départ nous ne sommes sur l'ouverture du formulaire
    }

    //Permets de rendre le bouton ajouter opérationnel
    handleClickAjoutPari = () => {
        //utilisation d'une fonction de rappel pour récuperer l ancienne valeur du state
        this.setState((oldState,props) => {
            return { ajoutPari: !oldState.ajoutPari}
        })
    }
    render()
    {
        return (
            <div className="container">
                <TitreH1>Tableau des paris</TitreH1>
                <Paris ajoutPari={this.state.ajoutPari} fermerAjoutLivre={() => this.setState({ajoutPari:false})}/>
                <Bouton
                    typeBtn="btn-success"
                    //Récupère la fonction handleClickAjoutPari
                    click={this.handleClickAjoutPari}
                    //si le booléen = false = ajouter, true = fermer ajout
                    css="w-100"> { !this.state.ajoutPari ? "Ajouter" : "Fermer ajout"}

                </Bouton>
            </div>
        );
    }
}

export default App;
