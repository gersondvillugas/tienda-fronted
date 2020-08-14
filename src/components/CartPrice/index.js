import React from 'react';
import './styles.css';

const CartPrice = props => { 

    return (
        <div className="PriceWrapper">
            {/* show price */}
            <div className="CardTitle">
                <h3>PRICE DETAILS</h3>
            </div>
            <div className="CardBody">
                <div className="FinalBilling">
                    <div className="Row">
                        <p>Price 
                            ({props.cartCount})
                            </p>
                        <p>
                            ${props.totalAmount}
                            
                        </p>
                    </div>
                    <div className="Row">
                        <p>Delivery</p>
                        <p>$0</p>
                    </div>
                    <hr />
                    <div className="Row">
                        <h4>Total Payable</h4>
                        <h4>
                            ${props.totalAmount}
                            </h4>
                    </div>
                </div>
                
            </div>
        </div>
    );


}


export default CartPrice;