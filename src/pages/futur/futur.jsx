import React from 'react';
import image from "../../image/futurTableau.png"

const Futur = () => {
    return (
        <div>
           <h2>Le futur : c'est demain/après !</h2> 
           <p>Exemple: <strong>"Demain, je mangerai les pommes de mon jardin."</strong></p>
           <p><strong>Le futur de l'indicatif exprime un fait ou une action qui se déroulera plus tard. Elle n'a pas encore eu lieu au moment où nous nous exprimons.</strong>
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
           <p>La construction du verbe est assez simple : <strong>infinitif + terminaison.</strong> </p>
           <h3>Les verbes du 1er groupe.</h3>
            <p>On ajoute, en général, la terminaison à l'infinitif du verbe, les terminaison sont:<strong> ai, as, a, ons, ez, ont</strong></p>
           
           <br></br>
           <img src={image}></img>
           <h2>Exercices récapitulatif:</h2>
           <li>Demain, je (partir)
                <select>
                    <option>partirais</option>
                    <option>partirez</option>
                    <option>partirai</option>
                </select> à la mer pour les vacances d'été.
            </li>
            <br />
            <li>Les élèves de 6ème année, (participer)
                <select>
                    <option>participeront</option>
                    <option>participerons</option>
                    <option>particeperaient</option>
                </select> au festival d'halloween du village.
            </li>
            <br />
            <li>Nous irons à la rivière pêcher de beaux poissons et ensuite nous les (manger)
                <select>
                    <option>mangrons</option>
                    <option>mangeront</option>
                    <option>mangerons</option>
                </select>.
            </li>
            <br />
            <li>Les document que vous avez photocopiés, vous les (deposer) 
                <select>
                    <option>déposerez</option>
                    <option>déposerait</option>
                    <option>déposeré</option>
                </select> après sur mon bureau.
            </li>
            <br />
            <li>Vous (balayer)
                <select>
                    <option>balaierai</option>
                    <option>balayerez</option>
                    <option>balaierez</option>
                </select> la cours pendant la récréation.
            </li>
        </div>
    );
};

export default Futur;