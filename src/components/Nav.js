import React, { Component } from 'react';
import styled from 'styled-components';
import '../components/styles/Nav.css';

const Contentname = styled.p`
  color:white;
  width: 80%;
  margin: 0 auto;
  text-align: center;
`;
class Nav extends Component {
    // static propTypes = {
    //     title :PropTypes.string.isRequired,
    //     items :PropTypes.array.isRequired
    // }
  render(){
    // const {title,items}=this.props
    return (
        <div className="Nav">
            <nav> 
                
    	<ul>
    
               <li class="botones">Botón 1</li>
                <li class="botones">Botón 2</li>
                 <li class="botones">Botón 3</li>
                  <li class="botones">Botón 4</li>
                

        </ul>


            </nav>
      </div>
    
       )
    
  }

}
export default Nav