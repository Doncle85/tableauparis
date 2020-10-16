import React, { Component } from 'react';
import Pari from "../Pari/Pari"

class Paris extends Component {
    state ={
        paris : [
            {id:1, pari: "paris1", createur: "createur1", enjeu: "enjeu1", participants : "participant1"},
            {id:2, pari: "paris2", createur: "createur2", enjeu: "enjeu2", participants : "participant2"},
            {id:3, pari: "paris3", createur: "createur3", enjeu: "enjeu3", participants : "participant3"},
            {id:4, pari: "paris4", createur: "createur4", enjeu: "enjeu4", participants : "participant4"}
        ]
    }

    //Fonction qui va permettre de supprimer un pari grace à l'ID du du pari
    handleSuppressionLivre =(id) => {
        //permets de récupérer l ID du pari à supprimer grce à la fonction findIndex
        //p = récupère toutes les cases du tableau
        //p.id === id = récupére l 'id du tableau et on vérifie qu il est égale à l'id mis en paramètre de la fonction
        const pariIndexTab = this.state.paris.findIndex(p => {
            return p.id === id;
        })

        //Duplication du Tableau
        const newParis = [...this.state.paris];
        //splice() est une fonction qui permets de supprimer les éléments d' un tableau
        newParis.splice(pariIndexTab,1);

        //Fusion de l'ancien tableau et du nouveau
        this.setState({paris:newParis})
    }

    render (){
        return (
            <table className="table text-center">
                <thead className="table-success">
                    <tr>
                        <th>Paris</th>
                        <th>Créateur</th>
                        <th>Enjeu</th>
                        <th>Paricipants</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {
                    //la fonction permets de parcourir l ensemble des cases du tableau livres.
                    this.state.paris.map(pari =>{
                     // Ne pas oublier le key pour parcourir le tableau
                       return ( <tr key={pari.id}>
                            <Pari
                                pari={pari.pari}
                                createur={pari.createur}
                                enjeu={pari.enjeu}
                                participants={pari.participants}
                                suppression={() => this.handleSuppressionLivre(pari.id)}
                                //Récupere la fonction et l id du pari pour pouvoir supprimer une ligne
                            />
                        </tr>
                       );
                    })
                }

                </tbody>
            </table>
        );
    }
}

export default Paris;