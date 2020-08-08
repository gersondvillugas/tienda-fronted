import React, { Component } from 'react';
import "./style.css";
import { Link, Redirect } from 'react-router-dom';
import Error from '../../components/Error';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Signup extends Component {
  constructor() {
        super();
        this.state = {
          nombre: '',
          edad: '',
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
        if(nombre === ''){
            // this.setError(true, 'Enter First Name'); return;
            alert('enter first name')
        }
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
        fetch('http://localhost:4000/api/tienda/usuario', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          })
            .then(res => res.json())
            .then(data => {
              console.log(data);
              //aqui toast
              toast("Wow so easy !");

              this.setState({nombre: '', edad: '',password:'',email:''});
           //   this.fetchTasks();
            })
            .catch(err => console.error(err));
      }
  render(){
    // const {title,items}=this.props
    return (
        <div className="Login">
            <form   onSubmit={this.addUsuario}>
                 <div className="input">
                     <input type="text" name="nombre" onChange={this.handleChange} placeholder="nombre" value={this.state.nombre}/>
                 </div>
                 <div  className="input" >
                 <input type="text" name="edad"  onChange={this.handleChange} placeholder="edad" value={this.state.apellido}/>
                 </div>
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
                 Signup 
               </button>
               <ToastContainer />

            </form>

            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <Link to="/login">Login</Link>
                    <Link to="/forget-password">Forgot Password ?</Link>
                </div>
        </div>
    )
    }
}
export default  Signup 