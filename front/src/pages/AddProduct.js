import React, { useState } from 'react'
import '../styles/AddProduct.css'
import Header from './Header.js';

const AddProduct = () => {
    const [allImages, setImage] = useState([]);
    const [description, setDescription] = useState('');
    const [nameProduct, setNameProduct] = useState('');
    const [price, setPrice] = useState('');
    const [type, setType] = useState('')
    const [tag, setTag] = useState('');
    const addProduct = (e) => {
        console.log(nameProduct, description, price, type, tag)
        e.preventDefault();
    }
    /*function displayImages(e) {
        console.log("display img START", allImages)

        const images = allImages
        console.log("images before push", images)

        images.push(URL.createObjectURL(e.target.files[0]))
        console.log("images after push", images)

        setImage(images)
        console.log("display img END", allImages)
      }
*/
    /*   function deleteImage(index) {
        const tempImages = allImages.splice(index, 1)
        console.log(index,tempImages)
        setImage(tempImages)
      }
    */
    return (
        <div>
            <Header />
            <div id="formContainer-addproduct">
                <h2>Ajouter un nouveau produit</h2>
                <form id="form-addproduct" onSubmit={(e) => addProduct(e)}>
                    <div id="table">
                        <div id="table-left">
                            <label id="label-addproduct" for="nameProduct">Nom du produit</label>
                            <input class="input-addproduct" placeholder='Nom' value={nameProduct} onChange={(e) => setNameProduct(e.target.value)} type="text" ></input><br />
                            <label id="label-addproduct" for="Description">Description</label>
                            <input class="input-addproduct" placeholder='Description' value={description} onChange={(e) => setDescription(e.target.value)} type="text"></input><br />
                            <label id="label-addproduct" for="Images">Insérez des images du produit</label>
                            <input class="input-addproduct" type="file" accept="image/jpeg, image/png, image/jpg" multiple="multiple"></input><br />
                        </div>
                        <div id="table-right">
                            <label id="label-addproduct" for="Price">Prix</label>
                            <input class="input-addproduct" placeholder='Prix' value={price} onChange={(e) => setPrice(e.target.value)} type="text" ></input><br />
                            <label id="label-addproduct" for="Type">Type</label>
                            <input class="input-addproduct" placeholder='Type' value={type} onChange={(e) => setType(e.target.value)} type="text" ></input><br />
                            <label id="label-addproduct" for="Tags">Tags</label>
                            <input class="input-addproduct" placeholder='Tags' value={tag} onChange={(e) => setTag(e.target.value)} type="text" ></input><br />
                            <input class="button-addproduct" type="submit" value="Soumettre" />
                        </div>
                    </div>

                    {/* <output>
            { allImages.forEach((img, index) => {
            console.log("map :", {img, index});
            return <>
                <div class="image" key={index}>
                <img src={img} alt="image"/>
                <span onClick={()=>deleteImage(index)}>&times;</span>
              </div>
              </>
            })
            }
            </output> */}

                </form>
            </div>
        </div>
    )
}
export default AddProduct;