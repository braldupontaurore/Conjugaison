import React from 'react';
import image from '../../image/imparfaitTableau.jpg'

const Imparfait = () => {

    return (
        <div>
             <h2>L'imparfait : c'est autrefois/tantôt (dans le passé) !</h2>
             <p>exemple: <strong>"Autrefois, je mangeais les pommes de mon jardin."</strong></p>
            <p>L'imparfait sert à exprimer une action passée, qui est présentée comme non terminée ou habituelle.</p>
           <h2>La règle:</h2>
            <p>Pour conjuger un verbe à l'imparfait, on utilise les terminaisons: <strong>ais, ais, ait, ions,iez, aient</strong></p>
            <img src={image}></img>
        </div>
    );
};

export default Imparfait