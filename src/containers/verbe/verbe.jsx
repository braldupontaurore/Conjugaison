import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const URLVerbe = "http://localhost:3001/conjugate?verb=";
const URLSuite = "&tense=present";

const Verbe = () => {
  const [verbes, setVerbes] = useState("");
  const [dbVerbe, setDbVerbe]=useState([])
  const [temps, setTemps] = useState("present");
  const [temps2, setTemps2]=useState("futur");

  console.log(verbes);

  const handleConjugate = () => {
    searchVerbe()
    //requête
  };

  const searchVerbe = async () => {
    const response = await axios.get(URLVerbe + verbes + URLSuite)
    console.log(response.data)
    setDbVerbe(response.data)

}
  return (
    <div>
      <h1>A quoi ça sert.</h1>
      <p>
        La conjugaison des verbes sert à indiquer <strong>la</strong> ou{" "}
        <strong>les</strong> personnes qui font l'action et le moment où se
        déroule l'action. La terminaison du verbe porte la marque de la personne
        et du temps.{" "}
      </p>
      <p>On distingue 2 temps: Les temps simples et les temps composés. </p>
      <h3>Les temps simples:</h3>
      <p>
        Le verbe n'est composé que d'un seul mot. Parmi les temps simples on
        trouve:
      </p>
      <ul>
        <li>Le présent de l'indicatif.</li>
        <li>L'imparfait de l'indicatif.</li>
        <li>Le passé simple.</li>
        <li>Le futur simple.</li>
      </ul>
      <h3>Les temps composés:</h3>
      <p>
        Le verbe est composé de 2 mot. L'auxiliaire "être" ou "avoir" + le
        participe passé.
      </p>
      Parmi les temps composé, on trouve:
      <ul>
        <li>Le passé composé de l'indicatif.</li>
        <li>Le plus-que-parfait de l'indicatif.</li>
      </ul>
      <p>
        Nous allons nous concentrer sur les 3 premiers temps simple de
        l'indicatiif:
      </p>
      <ul>
        <li>Le présent, le futur et l'imparfait.</li>
      </ul>
      <hr />
      <br />
      <label>Encode le verbe de ton choix:</label>
      <input
        type="text"
        value={verbes}
        onChange={(e) => setVerbes(e.target.value)}
      ></input>
      <select id="nav" value={temps} onChange={(e) => setTemps(e.target.value)}>
        <option value="present">Présent</option>
        <option value="futur">Futur</option>
        <option value="imperfect">Imparfait</option>
      </select>
      <button onClick={handleConjugate}> Recherche </button>
      <br />
      {dbVerbe.map((el) => <p>{el.pronoun} {el.verb}</p> )}
    </div>
  );
};

export default Verbe;
