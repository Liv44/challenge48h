import React, { useState } from "react";
import { Link } from "react-router-dom";
import { parseString } from "../createAccount";
import "../styles/createAccount.css"
import home from "../image-home.png"

const Signup = () => {
  const [Prenom, setPrenom] = useState("");
  const [Nom, setNom] = useState("");
  const [Email, setEmail] = useState("");
  const [mdp, setmdp] = useState("");

  const loguser = (evant) => {
    evant.preventDefault();
    const data = { Prenom, Nom, Email, mdp };
    for (const key in data) {
      if (typeof data[key] === "string") {
        data[key] = parseString(data[key]);
      }
    }
    console.log(data);
  };
  return (
    <div>
      <a href="/">
        <img id="icon-home" src={home} />
      </a>
      <div id="formContainer-signup">
        <h2>Créer un compte</h2>
        <form id="formulaire-signup" onSubmit={(event) => loguser(event)}>
          <label id="label-signup" for="prenom">Prenom</label>
          <input
            required
            type="text"
            id="firstname-signup"
            placeholder="Prenom"
            value={Prenom}
            onChange={(e) => setPrenom(e.target.value)}
          />
          <br />
          <label id="label-signup" for="nom">Nom</label>
          <input
            required
            type="text"
            id="lastname-signup"
            placeholder="Nom"
            value={Nom}
            onChange={(e) => setNom(e.target.value)}
          />
          <br />
          <label id="label-signup" for="Email">Email</label>
          <input
            required
            type="text"
            id="email-signup"
            placeholder="Email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label id="label-signup" for="mdp">Mot de passe</label>
          <input
            required
            type="text"
            id="mdp-signup"
            placeholder="Mot de passe"
            value={mdp}
            onChange={(e) => setmdp(e.target.value)}
          />
          <br />
          <a id="account-login" href="/login">Vous avez déjà un compte</a>
          <input type="submit" value="Log In" id="button-signup" required />
        </form>
      </div >
    </div >
  );
};

export default Signup;
