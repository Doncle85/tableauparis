import React, { Component } from 'react';
import Bouton from "../../Components/Bouton/Bouton"

class Paris extends Component {
    state ={
        paris : [
            {id:1, pari: "paris1", createur: "createur1", enjeu: "enjeu1", participants : "participant1"},
            {id:2, pari: "paris2", createur: "createur2", enjeu: "enjeu2", participants : "participant2"},
            {id:3, pari: "paris3", createur: "createur3", enjeu: "enjeu3", participants : "participant3"},
            {id:4, pari: "paris4", createur: "createur4", enjeu: "enjeu4", participants : "participant4"}
        ]
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
                                    <td>{pari.pari}</td>
                                    <td>{pari.createur}</td>
                                    <td>{pari.enjeu}</td>
                                    <td>{pari.participants}</td>
                                    <td><Bouton typeBtn="btn-danger" click={() => console.log("Supprimer")}>Supprimer</Bouton></td>
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