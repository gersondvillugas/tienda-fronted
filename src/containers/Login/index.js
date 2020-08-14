import React, { Component } from 'react';
import "./style.css";
import { Link, Redirect } from 'react-router-dom';
import Error from '../../components/Error';
import API from '../../Api';

class Signup extends Component {
  constructor() {
        super();
        this.state = {
          nombre: '',
          edad: '',
          redirectToReferrer: false,

          password: '',
          email:'',
          repassword :'',
          usuarios: []
        };
        this.handleChange = this.handleChange.bind(this);
       this.addUsuario = this.addUsuario.bind(this);
      }
      handleChange(e){
        e.preventDefault();       
         const { name, value } = e.target;
        this.setState({
          [name]: value
        });
      }
      addUsuario(e){
        e.preventDefault();
        const {nombre,edad,password,repassword,email}=this.state
     
        if(email === ''){
            // this.setError(true, 'Enter Email');
            // return;
            alert('Enter email')
        }
        if(password === ''){
           alert('Enter password')
        }
        if(repassword === ''){
            // this.setError(true, 'Enter Repassword');
            // return;
            alert('Enter Repassword')

        }
        if(password !== repassword){
            // this.setError(true, 'Password dosent match');
            // return;
            alert('Password dosent match')

        }
     

            API.post(`login`, { email,password })
            .then(res => {
              console.log(res);
              console.log(res.data);
              localStorage.setItem("accesstoken",res.data.token)
              this.setState({
                redirectToReferrer: true
            })
            this.setState({nombre: '', edad: '',password:'',email:''});


            })
          
            .catch(err => console.error(err));
       

      }
  render(){
    // const {title,items}=this.props
    if(this.state.redirectToReferrer){
      return <Redirect to="/products" />
  }
    return (
        <div className="Login">
            <form   onSubmit={this.addUsuario}>
               
                <div className="input" >
                 <input type="email" name="email" onChange={this.handleChange}  placeholder="email" value={this.state.email}/>
                 </div>
                <div  className="input" > 
                <input type="password" name="password" onChange={this.handleChange} placeholder="password" value={this.state.password}/>

                </div>
                <div  className="input" > 
                <input type="password" name="repassword" onChange={this.handleChange} placeholder="Re-enter password" value={this.state.repassword}/>

                </div>

              <button type="submit" className="btn light-blue darken-4" >
                 Login 
               </button>
            </form>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <Link to="/signup">Create a new account</Link>
                    <Link to="/forget-password">Forgot Password ?</Link>
                </div>
        </div>
    )
    }
}
export default  Signup 