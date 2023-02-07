import home from "../image-home.png"
import "../styles/commande.css"
import Header from "./Header";

export const Commande = () => {
  return (
    <div id="mainContainer">
      <Header />
      <div id="infoCommande">
        <p>Prix de votre commande </p>
        <p>Vos articles</p>
      </div>
      <div id="formContainer-command">
        <h2>Paiement</h2>
        <input
          type={"text"}
          id="inputCarte"
          placeholder="numero de carte"
        ></input><br />
        <input
          type={"text"}
          id="inputCarte"
          placeholder="criptogramme"
        ></input><br />
        <input type={"text"} id="inputCarte" placeholder="date"></input><br />
        <input type={"submit"} id="button" value="Envoyer"></input>
      </div>

    </div>
  );
};
