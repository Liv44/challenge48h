import React, { useState } from 'react';
import Header from './Header';
const Bag = () => {
    let finalPrice = 0

    const [articles, setArticles] = useState(
        [
            { id: 45454, type: "vetement", name: "chaussures", price: 50, color: "gris", number: 1 },
            { id: 465, type: "vetement", name: "t-shirt", price: 56, color: "noir", number: 4 },
            { id: 45869798454, type: "vetement", type: "vetement", name: "chaussures", price: 80, color: "blanc", number: 1 },
            { id: 454654454, type: "vetement", name: "pantalon", price: 51, color: "bleue", number: 2 }


        ]);
    articles.forEach(element => {
        finalPrice = finalPrice + element.price
    });

    return (
        <div>
            <Header></Header>
            <h1>Mon Panier</h1>
            <table id="panier">
                <tr>
                    <th>ID du produit</th>
                    <th>Type du produit</th>
                    <th>Nom du produit</th>
                    <th>Prix</th>
                    <th>couleur</th>
                    <th>Quantité</th>

                </tr>
                {/* <tr>
            <td>T-Shirt</td>
            <td>20€</td>
            <td><input type="number" value="1" min="0"></input></td>
            <td class="total"></td>
        </tr> */}
                {
                    articles.map((article) => {
                        return <tr>
                            <td>{article.id}</td>
                            <td>{article.type}</td>
                            <td>{article.name}</td>
                            <td>{article.price}</td>
                            <td>{article.color}</td>
                            <td>{article.number}</td>

                        </tr>
                    })
                }
            </table>
            <td class="total"></td>
            <p id="total">Total général :{finalPrice}</p>

        </div>
    );
}
export default Bag;
