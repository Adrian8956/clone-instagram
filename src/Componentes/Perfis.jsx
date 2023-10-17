function Perfis(props){
  return(
    <div className="perfis">
        <div className="contenleft">
           <img src={props.img} alt="" />
          <div className="nome">
            <h4>{props.usuario}</h4>
            <p>{props.nome}</p>
          </div>
             <a href="#">{props.opcao}</a>
        </div>
    </div>
  )
}

export default Perfis