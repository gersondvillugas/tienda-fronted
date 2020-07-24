import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import './styles.css';
import CartItem from '../Cart/CardItem';

import CartPrice from '../../components/CartPrice';

class Cart extends Component{

    state = {
        cartItems: [],
    }

    decreaseQuantity = (e, productId) => {
        this.updateCart(productId, -1);
    }

    increaseQuantity = (e, productId) => {
        this.updateCart(productId, 1);
    }

    updateCart = async (productId, quantity) => {
        try{
            const auth = this.props.auth;
            let product = this.state.cartItems.find(item => item.product === productId);
            product = {
                productId: product.product,
                quantity: parseInt(product.quantity) + parseInt(quantity),
                newQuantity: quantity,
                price: product.price,
                total: parseFloat(product.total) + parseFloat( product.price * quantity )
            }
            if(product.quantity <= 0){
                return;
            }
            const response = await this.props.updateCart(auth.token, auth.user.userId, product);
            if(response.ok == 1){
                const {cartItems} = this.state;
                this.setState({
                    cartItems: cartItems.map(item => item.product === productId ? 
                        {...item, quantity: item.quantity + quantity, total: item.total + (item.price * quantity)}: item)
                })
            }
        }catch(error){
            console.log(error);
        }
        
    }

    changeQuantity = (e, productId) => {

        // console.log(e.target.value);

        // if(isNaN(e.target.value)){
        //     return;
        // }

        // const firstDigit = parseInt(e.target.value.split("")[0]);
        // if(firstDigit === 0){
        //     return;
        // }

        // //alert(e.target.value);

        // this.updateCart(productId, parseInt(e.target.value));
    }

    componentDidMount() {
      
       
       
                // if(cartItems.cart.length > 0){

             this.getCartItem()

             
    
}
    getCartItem() {
        fetch('http://localhost:4000/api/tienda/carditem')
          .then(res => res.json())
          .then(data => {
            this.setState({cartItems: data});
         
            console.log(this.state.cartItems);
           // console.log(product['cart'][0].producto.nombre)
          });
     }
           
    

    render (){

        return (
            <React.Fragment>
                <Header />
                <div className="Content">
                    <div className="CartWrapper">
                        <div className="CartDetails">
                            {/* List cart items */}
                            <div className="CardTitle">
                                <h3>My Cart</h3>
                            </div>
                            <div className="CardBody">

                                {
                                    this.state.cartItems.map(product => 
                                        <CartItem
                                            key={product._id}
                                            productId={product._id}
                                            name={product['cart'][0].nombre}
                                            image={product['cart'][0].img}
                                            price={product['cart'][0].price}
                                            quantity={product['cart'][0].quantity}
                                            total={product.total}
                                            //name="quantity" 
                                            changeQuantity={this.changeQuantity}
                                            increaseQuantity={this.increaseQuantity}
                                            decreaseQuantity={this.decreaseQuantity}
                                    />)
                                }
                                

                                <div className="PlaceOrder">
                                    <button className="PlaceOrderButton" onClick={() => this.props.history.push('/place-order')}>Place Order</button>
                                </div>

                            </div>
                        </div>
                        
                        <CartPrice />

                    </div>
                </div>
            </React.Fragment>
        );
    }
}




export default Cart;