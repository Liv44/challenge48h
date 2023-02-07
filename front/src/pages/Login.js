import React, { useState } from "react";
import "../styles/Login.css"
import home from "../image-home.png"

const Login = () => {
  const [email, setemail] = useState("");
  const [mdp, setmdp] = useState("");

  const loguser = (evant) => {
    console.log(email, mdp);
    evant.preventDefault();
  };
  return (
    <div>
      <a href="/">
        <img id="icon-home" src={home} />
      </a>
      <div id="formContainer-login">
        <h2>Se connecter</h2>
        <form id="form-login" onSubmit={(event) => loguser(event)}>
          <label id="label-login" for="Email">Email</label>
          <input
            required
            id="Email-login"
            type="email"
            placeholder="Entrez votre email..."
            value={email}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$"
            onChange={(e) => setemail(e.target.value)}
          />
          <br />
          <label id="label-login" for="mdp">Mot de passe</label>
          <input
            type="password"
            id="Mdp-login"
            placeholder="Entrez votre mot de passe..."
            value={mdp}
            onChange={(e) => setmdp(e.target.value)} /><br />
          <a id="forgot-mdp-login" href="">Mot de passe oublié ?</a>
          <a id="create-account-login" href="/signup">Créer un compte</a>
          <input type="submit" value="Log In" id="button-login" required />
        </form>
      </div>
    </div>
  );
};

export default Login;
