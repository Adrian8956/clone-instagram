<<<<<<< HEAD
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

=======
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

>>>>>>> bca7dbca5be92d075914cb3204075b2fb3195579
export default Itemdireito