import React from 'react';
import { Link} from 'react-router-dom';

const Product = props => {

   // const url = props.match.url === '/' ? '/products/all' : props.match.url;

    return (
      <Link to={`/products/${props.id}`}>
            <div className="Product">
                <div className="ProductImage">
                    <img alt="" src={props.img} />
                </div>
                <div className="ProductDetails">
                    <p>{props.name}</p>
                    <p>${props.price}</p>
                </div>
            </div>
       </Link>
    );
}

//export default withRouter(Product);
export default Product;