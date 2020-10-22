import React from 'react';

const bouton = (props) => {
   const btnCss = `btn ${props.typeBtn} ${props.css}`//typeBtn permets de definir une couleur de bouton;css permets que le bouton ajouter prenne toutes la place
   return  <button className={btnCss} onClick={props.click} type="button"/*fonction permettant d'activer le bouton*/ >
      {props.children}
   </button>
    //le composant qui utilisera le bouton definira son con contenu grace à props.children

};

export default bouton;