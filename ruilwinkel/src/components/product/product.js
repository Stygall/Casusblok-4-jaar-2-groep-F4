import React from 'react';
import './product.css';

function Product(){
    return(
        <div>
            <form className="productForm">
                <label>
                    Artikelnummer:
                    <input type="text" name="artNum"/><br/>
                </label>
                <label>
                    Categorie:
                    <input type="text" name="categorie"/><br/>
                </label>
                <label>
                    Creditwaarde:
                    <input type="text" name="credits"/><br/>
                </label>

                <input type="submit" value="Product toevoegen"/>
            </form>
        </div>
    )
}

export default Product;