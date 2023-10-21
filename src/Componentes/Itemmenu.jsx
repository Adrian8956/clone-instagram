function ItemMenu(props){
   return(
    <div className="itens">
    <span className="iconeMenu">{props.icone}</span>
    <span className="nomeMenu">{props.nome}</span>
    </div>
   )
}

export default ItemMenu