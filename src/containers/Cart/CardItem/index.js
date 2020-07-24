import React from 'react';
import QuantityControl from '../../../components/QuantityControl';

import './styles.css';

const CartItem = props => {
   const deletCartItem=(productId)=>{
       //console.log(productId)
       //e.preventDefault();

       return fetch('http://localhost:4000/api/tienda/carditem' + '/' + productId, {
        method: 'delete'
      }).then(response =>
        response.json().then(json => {
          return json;
        })
      ).then(
          fetchCardItem()
      );
     //  http://localhost:4000/api/tienda/carditem/5f18501fa8391e4b58ab069a
    }
    const fetchCardItem=()=> {
        fetch('http://localhost:4000/api/tienda/carditem')
          .then(res => res.json())
         ;
      }
    return (
        <div className="SingleItem">
            <div className="ItemWrapper">
                <div className="ItemImage" style={{width: '80px', height: '80px', overflow: 'hidden', position: 'relative'}}>
                    <img style={{maxWidth: '100%', maxHeight: '100%', position: 'absolute', left: '50%', transform: 'translateX(-50%)'}} src={"http://localhost:4000/api/tienda/imagen/productos/" +
                  props.image} alt="" />
                </div>
                <div className="ItemDetails">
                    <p className="ItemName">{props.name}</p>
                    <p className="ItemPrice">${props.price}</p>
                </div>
            </div>
            <div className="CartActionButtons">
                <QuantityControl
                    productId={props.productId}
                    name={props.name} 
                    quantity={props.quantity}
                    changeQuantity={props.changeQuantity}
                    increaseQuantity={props.increaseQuantity}
                    decreaseQuantity={props.decreaseQuantity}
                />
                <a href="#" onClick={()=>{deletCartItem(props.productId)}}>REMOVE</a>
            </div>
        </div>
    )
}

export default CartItem;
