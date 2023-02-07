import '../styles/home.css';
import React, { useEffect, useState } from 'react';
import Header from './Header.js';
import Footer from './Footer.js';


const App = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      };
      const response = await fetch(`http://localhost:4000/article/all`, requestOptions)
        .then((res) => res.json())
        .then((data) => {
          setArticles(data);
          return data
        });
      console.log(response);
    }
    fetchData();
  }, [])
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
          {articles.map((article) => {
            return <div class="home-left-block">
              <img src="https://www.cdiscount.com/pdt2/2/9/8/1/700x700/mp47165298/rw/paire-basket-baskets-chaussures-sneakers-lidl-edit.jpg" alt="" />
              <h1>{article.name}</h1>
              <p>{article.description}</p>
              <p>{article.price}€</p>
            </div>
          })

          }

        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;


