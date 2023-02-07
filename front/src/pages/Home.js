import '../styles/home.css';
import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';


const App = () => {
  return (
    <div>
      <Header />
      <div class="home">
        <div id="filter-home">
          <form id="form-filter">
            <label for="">Catégories  </label>
            <select>
              <option value="null">Aucune</option>
              <option value="">Nouvelles technologies</option>
              <option value="">Vêtements</option>
              <option value="">Chaussures</option>
              <option value="">Accessoires</option>
              <option value="">Maison</option>
              <option value="">Jardin</option>
              <option value="">Sport</option>
              <option value="">Loisirs</option>
            </select>
            <input type="submit" value="Soumettre" id="button-filter" />
          </form>
        </div>
        <div class="home-left">
          <div class="home-left-block">
            <img src="https://www.cdiscount.com/pdt2/2/9/8/1/700x700/mp47165298/rw/paire-basket-baskets-chaussures-sneakers-lidl-edit.jpg" alt="" />
            <h1>Nom du produit</h1>
            <p>description</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;


