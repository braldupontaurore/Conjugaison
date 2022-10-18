import React from 'react';
import { useState } from 'react';
import image from "../../image/PresentTableau.png"


const Present = (props) => {
  const[choice1, setChoice1]=useState('roulait')
  const[choice2, setChoice2]=useState('montais')
  const[choice3, setChoice3]=useState('partes')
  const[choice4, setChoice4]=useState('finissez')
  const[choice5, setChoice5]=useState('rens')
  const[result, setResult]=useState('')

    
    return (
        <div>
           <h2>Le présent : aujourd'hui/maintenant !</h2> 
           <p>Exemple:<strong>"Aujourd'hui, je mange les pommes de mon jardin."</strong></p>
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
           <h2>Les règles:</h2>
           <h3>Les verbes du 1er groupe.</h3>
           <p>Les verbes du premier goupe sont tous ceux qui se finissent en "ER" à l'infinitif, sauf "aller".</p>
           <p>Les terminaison sont: <strong>e, es, e, ons, ez, ent.</strong></p>
           <h3>Les verbes du 2ème groupe.</h3>
           <p>Les verbes du deuxième groupe sont tous ceux qui se finissent en "IR" à l'infinitif et qui ont un participe présent en "issant"</p>
           <p>Les terminaison sont: <strong>is, is, it, issons, issez, issent</strong></p>
           <br></br>
           <img src={image}></img>
           <h3>Voci quelques exercices.</h3>
           <ul>
            <li>Derrière nous, un motard (rouler)
                <select value={choice1} onChange={e => setChoice1(e.target.value)}>
                    <option value="roulait">roulait</option>
                    <option value="roule">roule</option>
                    <option value="roulera">roulera</option>
                </select> très vite. Nous le laissons passer.</li>
                <br />
            <li>Vous (monter)
                <select value={choice2} onChange={e => setChoice2(e.target.value)}>
                <option>montais</option>
                <option>montez</option>
                <option>monterons</option>
                </select>la tente pendant que je renge le coffre de la voiture./</li>
                <br />
            <li>Elles (partir)
                <select value={choice3} onChange={e => setChoice3(e.target.value)}>
                    <option value="partes">partes</option>
                    <option value= "partent">partent</option>
                    <option value="parte">parte</option>
                </select> en randonnée à la montagne.</li>
                <br />
            <li>Pierre et Marc(finir)
                <select value={choice4} onChange={e => setChoice4(e.target.value)}>
                    <option>finissez</option>
                    <option>finissent</option>
                    <option>finirent</option>
                </select> leur repas du soir.</li>
                <br />
            <li>Je(prendre)
                <select value={choice5} onChange={e => setChoice5(e.target.value)}>
                    <option>prens</option>
                    <option>prends</option>
                    <option>prent</option>
                </select> leur repas du soir.
            </li>
           </ul>
            <input type="submit" value="resultat"/>
            <input type="text" value={result}></input>
        </div>
    );
};

export default Present