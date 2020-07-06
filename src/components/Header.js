import React, { Component } from 'react';
import '../components/styles/Header.css';
class Header extends Component {
    // static propTypes = {
    //     title :PropTypes.string.isRequired,
    //     items :PropTypes.array.isRequired
    // }
  render(){
    // const {title,items}=this.props
    return (
        <div className="Header">
            {/* <div className="Logo">
            <img src={logo}  alt="logo" />
                 <h2>
                   {title}
                </h2>
                <ul className="Menu">
                     {
                     items && items.map((item,key)=><li key={key}> <Link to={item.url}>{item.title}</Link></li>)
                     }
                </ul>
            </div>
         */}
          <p>este es el cabecote</p>
        </div>
    
       )
    
  }

}
export default Header