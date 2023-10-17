function Descricao(props){
    return(
        <div className="descricao">
          <h4>{props.nome}</h4>
          <p>{props.texto}</p>
        </div>
    )
}

export default Descricao