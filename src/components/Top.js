import React, { Component } from 'react';
import styled from 'styled-components';
import '../components/styles/Top.css';
import  Nav from './Nav'
const Wrapper=styled.div`
display: flex; 
flex-direction: wrap;
;
 
`
const Wrappername = styled.div`
    background-color: #0A0A0A;
  
  text-align: right;
  width:150px;
  height:30px;
  margin-top: 1px;






`;
const Wrappersearch = styled.div`
height:40px;
  width: 300px;
  margin: 0 auto;
 
`;
const Contentname = styled.p`
  color:white;
  width: 80%;
  margin: 0 auto;
  text-align: center;
`;
class Top extends Component {
    // static propTypes = {
    //     title :PropTypes.string.isRequired,
    //     items :PropTypes.array.isRequired
    // }
  render(){
    // const {title,items}=this.props
    return (
        <div className="Top">
          <Wrapper>

        
          <Wrappername>
            
             <Contentname>Gerson Center</Contentname>
         
          </Wrappername>
          <Wrappersearch> 
          <form className="Form">
          
               <div className="Form">
                <input  type="search" required/>
                <label class="label-icon" for="search"><i class="material-icons">search</i></label>
                <i class="material-icons">close</i>
               </div>
              </form>
         </Wrappersearch> 
          <div>
          <span class="material-icons">
              add_shopping_cart
          </span>    
          </div>   
          
        </Wrapper>
        <Nav/>
      </div>
    
       )
    
  }

}
export default Top