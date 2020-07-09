import React, { Component } from 'react';


 
import '../components/styles/Products.css';
import Product from '../components/Product/index';
import {productos} from  './productos.json';
class Products extends Component{
    constructor() {
        super();
        this.state = {
            
            productos:[],
            img : null,
             
            };
//        this.handleChange = this.handleChange.bind(this);
  //     this.addUsuario = this.addUsuario.bind(this);
      }
      componentDidMount() {
        this.fetchTasks();
      }
    
      fetchTasks() {
        fetch('http://localhost:4000/api/tienda/producto')
          .then(res => res.json())
          .then(data => {
            this.setState({productos: data});
         
            console.log(this.state.productos);
            console.log("----")
            console.log(this.state.productos[0].img) 
          //  console.log(this.state.productos[0].img) 
            console.log("----")
          });
       
       
      }
    

    render() {


        
        
        return (

            <div className="Content">
                    <div className="ContentTitle">
                        <h2 className="CategoryTitle">Title</h2>
                    </div>
                    <div className="ContentBody">
                        <div className="SideMenu">
                            <h3 className="SideMenuTitle">Filters</h3>
                            <div className="Filter">
                                <p className="FilterTitle">Categories</p>
                                <ul>
                                    {/* {
                                        this.props.products.categories.length > 0 ? 
                                        this.categoryTree(this.props.products.categories) : null
                                    } */}
                                </ul>
                            </div>
                            
                           <div className="Filter">
                               <p className="FilterTitle">Price</p>
                               <div>
                                     <button style={{color:'#D7D7D7'}}> Low to High</button>
                                    {/* <button onClick={() => this.applyFilter({price:1} )} className="FilterButton">Low to High</button> */}
                               </div>
                               <div>
                               <button style={{color:'#D7D7D7'}}> High to Low</button>
                                    {/* <button onClick={() => this.applyFilter({price: -1})} className="FilterButton">High to Low</button> */}
                               </div>
                               
                           </div>
                       
                        </div>
                        
                        <div className="MainContent">

                        <div className="ProductArea">
                            {
                                this.state.productos.map(product => <Product
                                    key={product._id}
                                 //   id={product.id}
                                     name={product.nombre}
                                    price={product.precioUni}
                                    img={'http://localhost:4000/api/tienda/imagen/productos/'+product.img}
                                />)
                                 
                            }
                            
                        </div>

                            
                        </div>

                    </div>
                </div>
            
        );
    }
}


export default Products