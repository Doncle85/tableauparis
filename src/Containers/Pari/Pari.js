import React from "react";
import Bouton from "../../Components/Bouton/Bouton";

//composant spécifique qui gère l affichage des livres.
const pari = (props) => (
<>
        <td>{props.pari}</td>
        <td>{props.createur}</td>
        <td>{props.enjeu}</td>
        <td>{props.participants}</td>
        <td><Bouton typeBtn="btn-danger" click={props.suppression}>Supprimer</Bouton></td>
</>

)
export default pari;