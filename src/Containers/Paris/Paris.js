import React, { Component } from 'react';
import Bouton from "../../Components/Bouton/Bouton"

class Paris extends Component {
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
                <tr>
                    <td>Paris 1</td>
                    <td>Créateur 1</td>
                    <td>Enjeu 1</td>
                    <td>4</td>
                    <td><Bouton typeBtn="btn-danger" click={() => console.log("Supprimer")}>Supprimer</Bouton></td>
                </tr>
                </tbody>
            </table>
        );
    }
}

export default Paris;