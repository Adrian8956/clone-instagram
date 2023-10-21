function Itemdireito(props){
    return(
        <div className="itemdireito">
           <div className="usuario">
              <img src={props.img} alt="" />
              <div className="infousuario">
               <p className="negrito">{props.usuario}</p>
               <p>{props.nome}</p>
              </div>
           </div>
           <a href="#">{props.opcao}</a>
        </div>
    )
}

export default Itemdireito