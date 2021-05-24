import React from 'react';
import './product.css';
import {useMoralis, useNewMoralisObject} from 'react-moralis';

function Product(){
    return(
        <div>
            <form className="productForm">
                <label>
                    <p className="text">
                        Artikelnummer:<br/>
                        <input  placeholder="Artikelnummer" className="input" type="number" min="0" name="artNum" required/><br/>
                    </p> 
                    
                </label>
                <label>
                    <p className="text">
                        Productnaam:<br/>
                        <input placeholder="Productnaam" className="input" type="text" name="prodName" required/><br/>
                    </p>                  
                    
                </label>
                <label>
                    <p className="text">
                        Categorie:<br/>
                        <select placeholder="Categorie" className="input" type="text" name="categorie" required>
                            <option value="Laptop">Laptop</option>
                            <option value="Randapparatuur">Randapparatuur</option>
                            <option value="Decoratie">Decoratie</option>
                            <option value="Spellen analoog">Spellen analoog</option>
                            <option value="Spellen digitaal">Spellen digitaal</option>
                            <option value="Keukengerei">Keukengerei</option>
                        </select><br/>
                    </p>                                      
                </label>
                <label>
                    <p className="text">
                        Credits:<br/>
                        <input placeholder="Credits" className="input" type="number" min="0" name="credits" required/><br/>
                    </p>                   
                </label>
                <label>
                    <p className="text">
                        Aantal:<br/>
                        <input placeholder="Aantal" className="input" type="number" min="1" name="amount" required/><br/>
                    </p>
                    
                    
                </label>
                <label>
                    <input className="input" type="submit"/>
                </label>
                
            </form>
            
        </div>
    )
}

export default Product;