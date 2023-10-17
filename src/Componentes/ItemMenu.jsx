function ItemMenu(props){
    return(
        <div className="elementos">
          <li className="icone">{props.icone}</li>
          <li>{props.texto}</li>
        </div>
    )
}

export default ItemMenu