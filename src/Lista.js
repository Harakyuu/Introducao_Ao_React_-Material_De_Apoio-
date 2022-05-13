function Lista(props) {
    return(
        <table className='minhaTabela'>
          <thead>
              <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Email</th>
              <th>Ações</th>
              </tr>
          
          </thead>  
          <tbody> 
              { props.usuarios.map( usuario => {
                  return (
                      <tr key={usuario.id}>
                          <td>{usuario.id}</td>
                          <td>{usuario.name}</td>
                          <td>{usuario.email}</td>
                          <td>
                              <button onClick={ event => props.atualizarUsuario(usuario) } > Editar </button>
                              <button onClick={ event => props.removerUsuario(usuario.id) } > Deletar </button>
                          </td>
                          
                      </tr>
                      )
              } ) }
          </tbody>
      </table>
    )
}

export default Lista;