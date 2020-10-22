import React, { Component } from 'react';
import Bouton from "../../../Components/Bouton/Bouton";
import {withFormik} from "formik";
import * as Yup from "yup";

class FormulaireAjout extends Component {

    /*permets de renseigner les valeurs présentes à l'intérieur du tableau
    state = {
        PariSaisi:"",
        CréateurSaisi:"",
        EnjeuSaisi:"",
        ParticipantsSaisi:""
}
    //fonction qui permettra de communiquer les infos au composant Paris
    handleValidationForm = (event) => {
        //empeche le comportement standard du bouton
        event.preventDefault();
        this.props.validation(this.state.PariSaisi,this.state.CréateurSaisi,this.state.EnjeuSaisi,this.state.ParticipantsSaisi);
        //permets de remettre a jour le state au niveau du formulaire
        this.setState({
            PariSaisi:"",
            CréateurSaisi:"",
            EnjeuSaisi:"",
            ParticipantsSaisi:""
        })
    }*/

    render() {
        return (
            <>
                <h2 className="text-center text-success" style={{fontFamily:"Abril Fatface"}}> affichage du formulaire d'ajout</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="pari">Pari</label>
                        <input type="text"
                               className="form-control"
                               id="pari"
                               name="pari"
                            //la value est = à la valeur dans le state
                               value={this.props.values.pari}
                               onChange={this.props.handleChange}

                        //utilisation de la fonction onChange.Lorsque il y a un changement dans l'input cela mets à jour le state
                        //utilisation d'une fonction fléché qui va envoyer l event pour le state pour le mettre à jour
                               //onChange={(event) => this.setState({PariSaisi:event.target.value})}

                        />
                        {this.props.errors.pari}
                    </div>
                    <div className="form-group">
                        <label htmlFor="createur">Créateur</label>
                        <input type="text"
                               className="form-control"
                               id="createur"
                               name="createur"
                            //la value est = à la valeur dans le sate
                               value={this.props.values.createur}
                               onChange={this.props.handleChange}
                            //utilisation de la fonction onChange.Lorsque il y a un changement dans l'input cela mets à jour le state
                            //utilisation d'une fonction fléché qui va envoyer l event pour le state pour le mettre à jour
                               //onChange={(event) => this.setState({CréateurSaisi:event.target.value})}

                        />
                        {this.props.errors.participants}
                    </div>
                    <div className="form-group">
                        <label htmlFor="Enjeu">Enjeu</label>
                        <input type="text"
                               className="form-control"
                               id="enjeu"
                               name="enjeu"
                            //la value est = à la valeur dans le sate
                               value={this.props.values.enjeu}
                                onChange={this.props.handleChange}
                            //utilisation de la fonction onChange.Lorsque il y a un changement dans l'input cela mets à jour le state
                            //utilisation d'une fonction fléché qui va envoyer l event pour le state pour le mettre à jour
                               //onChange={(event) => this.setState({EnjeuSaisi:event.target.value})}

                        />
                        {this.props.errors.enjeu}
                    </div>
                    <div className="form-group">
                        <label htmlFor="participants">Participants</label>
                        <input type="text"
                               className="form-control"
                               id="participants"
                               name='participants'
                            //la value est = à la valeur dans le sate
                               value={this.props.values.participants}
                               onChange={(event) => this.props.setFieldValue('participants',+event.target.value )}
                            //utilisation de la fonction onChange.Lorsque il y a un changement dans l'input cela mets à jour le state
                            //utilisation d'une fonction fléché qui va envoyer l event pour le state pour le mettre à jour
                               //onChange={(event) => this.setState({ParticipantsSaisi:event.target.value})}

                        />
                        {this.props.errors.participants}
                    </div>
                    <Bouton typeBtn="btn-primary" click={this.props.handleSubmit}> Valider</Bouton>
                </form>
            </>
        );
    }
}

export default withFormik({
        mapPropsToValues: () => ({
            pari:'',
            createur:'',
            enjeu:'',
            participants:''
        }),
    validationSchema : Yup.object().shape({
        pari : Yup.string()
            .min(10,'le pari doit avoir plus de 10 caractères')
            .max(200, 'le pari doit avoir moins de 200 caractères')
            .required(" pari requis"),
        createur: Yup.string()
            .min(3,"l auteur doit avoir plus de 3 caractères")
            .required("l auteur est requis"),
        enjeu: Yup.string()
            .min(5,'l enjeu doit contenir plus de 5 caractères')
            .required("enjeu obligatoire"),
        participants: Yup.number()
            .moreThan(1,'Il faut au moins 1 participant')
            .lessThan(3,'2 Participants au maximum')
    }),
    handleSubmit:(values, {props}) => {
        props.validation(values.pari,values.createur,values.enjeu,values.participants);
    }
    }
)(FormulaireAjout);