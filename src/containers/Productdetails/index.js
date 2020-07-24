import React, { Component, useState, useEffect ,useContext} from "react";

// import Header from '../../components/Header/Header';

import "./style.css";
import { CartProvider } from '../CartContex';

//import { base_url } from '../../constants';

export const ProductDetails = (props) => {
  const [product, setProduct] = useState([]);
  const [id, setId] = useState([]);

  const addToCart = (productId, price, name, image) => {
     // console.log("asad")
    console.log(name)
    console.log(price)
    console.log(image)
    const cartItem = {
        cart :[
          {
            producto: productId,
            nombre:name,
            img:image,
            quantity: 1,
            price: price
          }
        ],
        name: name,
        image: image,
    }
    fetch('http://localhost:4000/api/tienda/carditem', {
      method: 'POST',
      body: JSON.stringify(cartItem),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
       // window.M.toast({html: 'Task Saved'});
       
     //   this.fetchTasks();
      })
      .catch(err => console.error(err));

  }

  useEffect(()=>{
   
   const  fetchTasks= async ()=> {
      console.log(props.match.params.id) 
       try {
           let res=await  fetch('http://localhost:4000/api/tienda/producto/'+props.match.params.id)
           console.log("id")
           let product =await res.json()
           setProduct(product)
           
       } catch(err){
            console.log("err")
            console.log("id")
         //   console.log(this.props.match.params)
       }
    } 
         
        fetchTasks()

  },[])
  let productDescription;

  if (product) {
    productDescription = (
      <div className="Content">
        <div className="ProductDetailsWrapper">
          <div className="ProductDetailsImage">
            <div className="ProductDetailsImageWrapper">
              <img
                src={
                  "http://localhost:4000/api/tienda/imagen/productos/" +
                  product.img
                }
                alt=""
              />
            </div>
            <div className="ActionButtonWrapper">
              <button
               onClick={()=>{addToCart(product._id,product.precioUni,product.nombre,product.img)}}
              >
                <i className="fas fa-shopping-cart"></i>&nbsp;ADD TO CART
              </button>
              <button style={{ background: "#fb641b" }}>
                <i className="fas fa-bolt"></i>&nbsp;BUY NOW
              </button>
            </div>
          </div>
          <div className="ProductDetails">
            <div className="BreadCrumb">
              <small>Home Mobiles Iphone</small>
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
                <img
                  src="https://rukminim1.flixcart.com/image/312/312/jxz0brk0/mobile/u/u/v/realme-3i-rmx1827-original-imafgbbkzrgsstkj.jpeg?q=70"
                  alt=""
                />
              </div>
              <div className="SimilarProductDetails">
                <h5>Product Name</h5>
                <p>$ 36521</p>
              </div>
            </div>

            <div className="SimilarProduct">
              <div className="SimilarProductImage">
                <img
                  src="https://rukminim1.flixcart.com/image/312/312/jzrb53k0pkrrdj/mobile/e/s/j/mi-redmi-7a-mzb8008in-original-imafg27hramfktfs.jpeg?q=70"
                  alt=""
                />
              </div>
              <div className="SimilarProductDetails">
                <h5>Product Name</h5>
                <p>$ 36521</p>
              </div>
            </div>

            <div className="SimilarProduct">
              <div className="SimilarProductImage">
                <img
                  src="https://rukminim1.flixcart.com/image/495/594/jxgflow0/t-shirt/y/h/g/xxl-tnvgyvnful-d22-tripr-original-imafhuq2s3yxbx2t.jpeg?q=50"
                  alt=""
                />
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
    );
  } else {
    productDescription = <div>Product is loading...!</div>;
  }

  return (
   
    <div>
      {/* <Header/> */}
     
      {productDescription}
    </div>
    

  );
};
// class ProductDetails extends Component{

//     state = {
//         product: null,
//         id_:""
//     }
//     // const [cart, setCart] = useContext(CartContext);

//     // const addToCart = () => {
//     //   const tshirt = { name: props.name, price: props.price };
//     //   setCart(currentState => [...currentState, tshirt]);
//     // }
//     componentDidMount() {

//         this.fetchTasks();
//         console.log("id externo ")
//         console.log(this.props.match.params.id)
//         console.log("-----")
//     }
//     fetchTasks() {
//         fetch('http://localhost:4000/api/tienda/producto/'+this.props.match.params.id)
//           .then(res => res.json())
//           .then(data => {
//             this.setState({product: data});

//             console.log(this.state.product);

//           });
//         }

//     render(){

//         const { product } = this.state;

//         let productDescription;

//         if(this.state.product){
//             productDescription =
//                 <div className="Content">
//                     <div className="ProductDetailsWrapper">
//                         <div className="ProductDetailsImage">
//                             <div className="ProductDetailsImageWrapper">
//                                 <img src={'http://localhost:4000/api/tienda/imagen/productos/'+product.img} alt="" />
//                             </div>
//                             <div className="ActionButtonWrapper">
//                                 <button
//                                 //  onClick={addToCart}
//                                 ><i className="fas fa-shopping-cart"></i>&nbsp;ADD TO CART</button>
//                                 <button style={{background: '#fb641b'}}><i className="fas fa-bolt"></i>&nbsp;BUY NOW</button>
//                             </div>
//                         </div>
//                         <div className="ProductDetails">
//                             <div className="BreadCrumb">
//                                 <small>Home  Mobiles  Iphone</small>
//                             </div>
//                             <p className="ProductTitle">{product.nombre}</p>
//                             <p className="ProductPrice">${product.precioUni}</p>
//                             <div className="ProductDescription">
//                                 <h3>Product Description</h3>
//                                 <p>{product._id}</p>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="SimilarProducts">
//                         <h3>Similar Products</h3>
//                         <div className="SimilarProductsWrapper">

//                             <div className="SimilarProduct">
//                                 <div className="SimilarProductImage">
//                                     <img src="https://rukminim1.flixcart.com/image/312/312/jxz0brk0/mobile/u/u/v/realme-3i-rmx1827-original-imafgbbkzrgsstkj.jpeg?q=70" alt=""/>
//                                 </div>
//                                 <div className="SimilarProductDetails">
//                                     <h5>Product Name</h5>
//                                     <p>$ 36521</p>
//                                 </div>
//                             </div>

//                             <div className="SimilarProduct">
//                                 <div className="SimilarProductImage">
//                                     <img src="https://rukminim1.flixcart.com/image/312/312/jzrb53k0pkrrdj/mobile/e/s/j/mi-redmi-7a-mzb8008in-original-imafg27hramfktfs.jpeg?q=70" alt=""/>
//                                 </div>
//                                 <div className="SimilarProductDetails">
//                                     <h5>Product Name</h5>
//                                     <p>$ 36521</p>
//                                 </div>
//                             </div>

//                             <div className="SimilarProduct">
//                                 <div className="SimilarProductImage">
//                                     <img src="https://rukminim1.flixcart.com/image/495/594/jxgflow0/t-shirt/y/h/g/xxl-tnvgyvnful-d22-tripr-original-imafhuq2s3yxbx2t.jpeg?q=50" alt=""/>
//                                 </div>
//                                 <div className="SimilarProductDetails">
//                                     <h5>Product Name</h5>
//                                     <p>$ 36521</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="ProductReviews">
//                         <h3>Product Reviews</h3>
//                     </div>

//                 </div>
//         }else{
//             productDescription = <div>Product is loading...!</div>
//         }

//         return (
//             <div>
//                 {/* <Header/> */}
//                 {productDescription}
//             </div>
//         );
//     }

// }

export default ProductDetails;
