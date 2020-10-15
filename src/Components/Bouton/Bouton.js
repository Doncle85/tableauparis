import React from 'react';

const bouton = (props) => {
   const btnCss = `btn ${props.typeBtn}`//permets de definir une couleur de bouton
   return  <button className={btnCss} onClick={props.click}/*fonction permettant d'activer le bouton*/ >
      {props.children}
   </button>
    //le composant qui utilisera le bouton definira son con contenu grace à props.children

};

export default bouton;