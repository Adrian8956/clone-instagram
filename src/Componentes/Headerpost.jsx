function Headerpost(props){
    return(
        <div className="headerpost">
          <div className="info">
           <img src={props.img} alt="" /> 
           <h5>{props.nome}</h5>
           <li>{props.hora}</li>
          </div>
          <h3>...</h3>
        </div>
    )
}

export default Headerpost