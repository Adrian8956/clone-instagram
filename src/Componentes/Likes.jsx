function Likes(props){
    return(
        <div className="likes">
           <li>{props.numero}</li>
           <li>{props.texto}</li>
        </div>
    )
}

export default Likes