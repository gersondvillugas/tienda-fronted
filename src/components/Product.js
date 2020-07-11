import React, { Component } from 'react';

import { Link } from 'react-router-dom';
  
import '../components/styles/Products.css';
import Product from '../components/Product/index';
import {productos} from  './productos.json';
class Products extends Component{
    constructor() {
        super();
        this.state = {
            
            productos:[],
            categorias:[],
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
      
          });
          fetch('http://localhost:4000/api/tienda/categoria')
          .then(res => res.json())
          .then(data => {
            this.setState({categorias: data});
         
            console.log(this.state.categorias);
      
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
                               {/* { this.state.categorias.map((categoria )=> 


                                 <ul>
                                     {
                                      // console.log(product.categoria.descripcion ) 
                                         categoria.descripcion 
                                        // this.props.products.categories.length > 0 ? 
                                        // this.categoryTree(this.props.products.categories) : null
                                    } 
                                </ul>
                                )
                                 
                              } */}
                                    <ul>
                                     {
                                      // console.log(product.categoria.descripcion ) 
                                        console.log(this.state.categorias.length)
                                        // this.props.products.categories.length > 0 ? 
                                        // this.categoryTree(this.props.products.categories) : null
                                    } 
                                </ul>
                            </div>
                            
                           <div className="Filter">
                               <p className="FilterTitle">Price</p>
                               <div>
                                     <button className="FilterButton" > Low to High</button>
                                    {/* <button onClick={() => this.applyFilter({price:1} )} className="FilterButton">Low to High</button> */}
                               </div>
                               <div>
                               <button className="FilterButton"> High to Low</button>
                                    {/* <button onClick={() => this.applyFilter({price: -1})} className="FilterButton">High to Low</button> */}
                               </div>
                               
                           </div>
                       
                        </div>
                        
                        <div className="MainContent">

                        <div className="ProductArea">
                            {
                                this.state.productos.map(product => <Product
                                    key={product._id}
                                    id={product._id}
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