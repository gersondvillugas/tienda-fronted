import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './style.css';
///import { base_url } from '../../../constants';

class BottomHeader extends Component{

    state = {
        categories: [],
        categoriesAr : []
    }

    componentDidMount() {
        this.fetchTasks()
  
    }
    fetchTasks() {
        fetch('http://localhost:4000/api/tienda/categoria')
        .then(res => res.json())
        .then(data => {
          this.setState({categories: data});
       
          console.log(this.state.categories);
    
        });
    }

    categoryTree(categories){

        console.log(categories);

        var categoriesAr = [];
        for(var value of categories){

            categoriesAr.push(
                    <li  className="Column">
                        <NavLink to={`/products/${value.slug}`}>{value.name}</NavLink>
                        {value.children.length > 0 ? (<ul>{this.categoryTree(value.children)}</ul>) : null}
                    </li>
            );
        }

        return categoriesAr;
    }

    render() {

      //  const cat = this.categoryTree(this.state.categories);

        return (
            <div className="BottomHeader">
                <ul className="Menu">
                    <li className="MenuItem"><Link to="/"><i className="fas fa-home"></i></Link></li>
                   
                    <li className="MenuItem"><Link to="/categories">Categories</Link></li>
                    <li className="MenuItem"><Link to="/information">Information</Link></li>
                    <li className="MenuItem"><Link to="/blog">Blog</Link></li>
                </ul>
    
            </div>
        );
    }
}



export default BottomHeader;