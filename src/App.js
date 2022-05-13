import logo from './logo.svg';
import './App.css';
import axios from "axios";
import Lista from './Lista.js';
import { useEffect, useState } from "react";



function App() {


  const [usuarios, setUsuarios] = useState([]);
  const [id,setId] = useState("");
  const [nome,setNome] = useState("");
  const [email,setEmail] = useState("");
  const [senha,setSenha] = useState("");

  
  function salvarFormulario(){
      

      let parametros = {
          name: nome,
          email: email,
          password: senha
      }
      axios.post('https://iot.14mob.com/api-fiap/public/index.php/users', parametros).then(response => {
          if(response.status == 201){
              alert('Ebaaaaa deu certo');
              atualizarLista();
          }else{
              alert('lascou');
          }
      }).catch( error => console.log(error));

  }

  function removerUsuario(id){
      console.log('funcionando' + id);

      axios.delete("https://iot.14mob.com/api-fiap/public/index.php/users/" + id).then( response => {
          alert('Deu certo removi o usuario')

          window.location = "";

      }).catch( error => console.log(error));

  }

  function atualizarUsuarioApi(){

      let parametros = {
          name: nome,
          email: email,
          password: senha
      }
      axios.put('https://iot.14mob.com/api-fiap/public/index.php/users/'+ id, parametros).then(response => {
          if(response.status == 200){
              alert('Ebaaaaa deu certo');
              atualizarLista();
          }else{
              alert('lascou')
          }
      }).catch( error => console.log(error));
  }

  function atualizarUsuario(usuario){
      setId(usuario.id);
      setNome(usuario.name);
      setEmail(usuario.email);
      setSenha(usuario.password);
  }

  function atualizarLista(){
    axios.get('https://iot.14mob.com/api-fiap/public/index.php/users').then( response => {
          setUsuarios(response.data.users);
          console.log(response);
    })
  }
  
useEffect(() => {
      atualizarLista();
},[])


return (
    <div>
      <form className="formulario" onSubmit={event => {
          event.preventDefault();
          if(id != ''){
              atualizarUsuarioApi()
          }else{
              salvarFormulario();
          }
          return false;
      } } > 
      <label>Nome</label>
      <input name="name" value={ nome }  onChange={ e => setNome(e.target.value) } />
      <label>Email</label>
      <input name="email" value={ email } onChange={ e => setEmail(e.target.value) } />
      <label>senha</label>
      <input name="password" value={ senha } onChange={ e => setSenha(e.target.value) } />
      
      <button type="submit">Enviar</button>
      </form>

      <p>{ nome }</p>
      <p>{ email }</p>
      <p>{ senha }</p>

      <Lista usuarios={usuarios} onEditar={usuario => atualizarUsuario(usuario)} atualizarLista={e => atualizarLista()}></Lista>

  </div>
    
    
);

  
}

export default App;
