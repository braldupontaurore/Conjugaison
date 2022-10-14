import React from 'react';
import image from "../../image/PresentTableau.png"


const Present = () => {
    return (
        <div>
           <h2>Le présent : c'est maintenant !</h2> 
           <p><strong>Le présent de l'indicatif exprime un fait qui se déroule au moment où on le rapporte.</strong>
           <br></br>
                <br></br>
                Il exprime :
            <ul>
                <li>Une action qui dure, qui est toujours en cours: <em>Nous travaillons depuis ce matin.</em></li>
                <li>Un état: <em>Elle est sage.</em></li>
                <li>Une habitude: <em>Tous les soirs, je me couche à  21 heures.</em></li>
                <li>Des vérités générales: <em>L'eau bout à 100 degrés.</em></li>
            </ul>
           </p>
           <h3>Les règles:</h3>
           <br></br>
           <img src={image}></img>
        </div>
    );
};

export default Present;