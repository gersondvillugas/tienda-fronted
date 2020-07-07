import React, { Component } from 'react';
import styled from 'styled-components';
import '../components/styles/Header.css';
const Content = styled.p`
  font-size: 16px;
  text-align: right;
`;
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
          <div className="Logo">
               logotipo
              
          </div>
          <Content> @buyer</Content>
        </div>
    
       )
    
  }

}
export default Header