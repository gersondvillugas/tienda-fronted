import React, { Component } from 'react';
import '../components/styles/Login.css';
class Login extends Component {
  constructor() {
        super();
        this.state = {
          nombre: '',
          apellido: '',
          password: '',
          email:'',
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
              window.M.toast({html: 'Task Saved'});
              this.setState({nombre: '', apellido: '',password:'',email:''});
              this.fetchTasks();
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
                 <input type="text" name="apellido"  onChange={this.handleChange} placeholder="apellido" value={this.state.apellido}/>
                 </div>
                 <div className="input" >
                 <input type="email" name="email" onChange={this.handleChange}  placeholder="email" value={this.state.email}/>
                 </div>
                <div  className="input" > 
                <input type="password" name="password" onChange={this.handleChange} placeholder="password" value={this.state.password}/>

                </div>

              <button type="submit" className="btn light-blue darken-4" >
                      Send 
               </button>
            </form>
        </div>
    )
    }
}
export default  Login 