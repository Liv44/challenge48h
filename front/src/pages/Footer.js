import React from "react";
import "../styles/Footer.css"

const Footer = () => {
    return (
        <div id="footer">
            <div id="footer-left">
                <h3>Open-Octodon</h3>
                <p>Open-Octodon est un site de vente de produits en ligne. Nous proposons des produits de qualité à des prix abordables.</p>
            </div>
            <div id="footer-right">
                <h3>Liens utiles</h3>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/addproduct">Ajouter un produit</a></li>
                    <li><a href="/admin">Admin</a></li>
                </ul>
            </div>
        </div>
    )
}
export default Footer;