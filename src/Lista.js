import axios from "axios";


function Lista(props) {

    function removerUsuario(id){
        console.log('funcionando' + id);
  
        axios.delete("https://iot.14mob.com/api-fiap/public/index.php/users/" + id).then( response => {
            alert('Deu certo removi o usuario')
  
            window.location = "";

            props.atualizarLista();
  
        }).catch( error => console.log(error));
  
    }

    return(
        <div>
            <table class='table table-striped'>
                <thead class="table-dark">
                    <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Data de criação</th>
                    <th>Ações</th>
                    </tr>
                
                </thead>  
                <tbody> 
                    { props.usuarios.map( usuario => {
                        return (
                            <tr key={usuario.id}>
                                <td>{usuario.name}</td>
                                <td>{usuario.email}</td>
                                <td>{usuario.created_at}</td>
                                <td>
                                    <div className="d-grid gap-2 d-md-block">
                                        <button className='btn btn-outline-info' onClick={ event => props.onEditar(usuario)} >
                                            <i class="bi bi-pencil-fill"></i>
                                        </button>
                                        <button className='btn btn-outline-danger' onClick={ event => removerUsuario(usuario.id) } >
                                            <i class="bi bi-trash3-fill"></i>
                                        </button>
                                    </div>
                                </td>
                                
                            </tr>
                            )
                    } ) }
                </tbody>
            </table>
        </div> 
    )
}

export default Lista;