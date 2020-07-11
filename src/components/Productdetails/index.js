import React, { Component } from 'react';

// import Header from '../../components/Header/Header';


import './style.css';
//import { base_url } from '../../constants';

class ProductDetails extends Component{

    state = {
        product: null,
        id_:""
    }

    componentDidMount() {

        this.fetchTasks();
        console.log("id externo ")
        console.log(this.props.match.params.id)
        console.log("-----")
    }
    fetchTasks() {
        fetch('http://localhost:4000/api/tienda/producto/'+this.props.match.params.id)
          .then(res => res.json())
          .then(data => {
            this.setState({product: data});
         
            console.log(this.state.product);
      
          });
        }

  
    render(){

        const { product } = this.state;

        let productDescription;

        if(this.state.product){
            productDescription = 
                <div className="Content">
                    <div className="ProductDetailsWrapper">
                        <div className="ProductDetailsImage">
                            <div className="ProductDetailsImageWrapper">
                                <img src={'http://localhost:4000/api/tienda/imagen/productos/'+product.img} alt="" />
                            </div>
                            <div className="ActionButtonWrapper">
                                <button><i className="fas fa-shopping-cart"></i>&nbsp;ADD TO CART</button>
                                <button style={{background: '#fb641b'}}><i className="fas fa-bolt"></i>&nbsp;BUY NOW</button>
                            </div>
                        </div>
                        <div className="ProductDetails">
                            <div className="BreadCrumb">
                                <small>Home  Mobiles  Iphone</small>
                            </div>
                            <p className="ProductTitle">{product.nombre}</p>
                            <p className="ProductPrice">${product.precioUni}</p>
                            <div className="ProductDescription">
                                <h3>Product Description</h3>
                                <p>{product._id}</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="SimilarProducts">
                        <h3>Similar Products</h3>
                        <div className="SimilarProductsWrapper">
                            
                            <div className="SimilarProduct">
                                <div className="SimilarProductImage">
                                    <img src="https://rukminim1.flixcart.com/image/312/312/jxz0brk0/mobile/u/u/v/realme-3i-rmx1827-original-imafgbbkzrgsstkj.jpeg?q=70" alt=""/>
                                </div>
                                <div className="SimilarProductDetails">
                                    <h5>Product Name</h5>
                                    <p>$ 36521</p>
                                </div>
                            </div>

                            <div className="SimilarProduct">
                                <div className="SimilarProductImage">
                                    <img src="https://rukminim1.flixcart.com/image/312/312/jzrb53k0pkrrdj/mobile/e/s/j/mi-redmi-7a-mzb8008in-original-imafg27hramfktfs.jpeg?q=70" alt=""/>
                                </div>
                                <div className="SimilarProductDetails">
                                    <h5>Product Name</h5>
                                    <p>$ 36521</p>
                                </div>
                            </div>
                            
                            <div className="SimilarProduct">
                                <div className="SimilarProductImage">
                                    <img src="https://rukminim1.flixcart.com/image/495/594/jxgflow0/t-shirt/y/h/g/xxl-tnvgyvnful-d22-tripr-original-imafhuq2s3yxbx2t.jpeg?q=50" alt=""/>
                                </div>
                                <div className="SimilarProductDetails">
                                    <h5>Product Name</h5>
                                    <p>$ 36521</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="ProductReviews">
                        <h3>Product Reviews</h3>
                    </div>
                    
                </div>
        }else{
            productDescription = <div>Product is loading...!</div>
        }
        
        

        return (
            <div>
                {/* <Header/> */}
                {productDescription}
            </div>
        );
    }

}



export default ProductDetails;