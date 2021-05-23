import React from 'react';
import './product.css';

function Product(){
    return(
        <div>
            <form className="productForm">
                <label>
                    Artikelnummer: 
                    <input  placeholder="Artikelnummer" className="input" type="number" min="0" name="artNum" required/><br/>
                </label>
                <label>
                    Productnaam:
                    <input placeholder="Productnaam" className="input" type="text" name="prodName" required/><br/>
                </label>
                <label>
                    Categorie:
                    <select placeholder="Categorie" className="input" type="text" name="categorie" required>
                        <option value="Laptop">Laptop</option>
                        <option value="Randapparatuur">Randapparatuur</option>
                        <option value="Decoratie">Decoratie</option>
                        <option value="Spellen analoog">Spellen analoog</option>
                        <option value="Spellen digitaal">Spellen digitaal</option>
                        <option value="Keukengerei">Keukengerei</option>
                    </select><br/>
                </label>
                <label>
                    Credits:
                    <input placeholder="Credits" className="input" type="number" min="0" name="credits" required/><br/>
                </label>
                <label>
                    Aantal:
                    <input placeholder="Aantal" className="input" type="number" min="1" name="amount" required/><br/>
                </label>

                <input className="input" type="submit" value="Product toevoegen"/>
            </form>
        </div>
    )
}

export default Product;