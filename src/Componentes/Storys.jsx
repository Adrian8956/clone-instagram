function Storys(props){
    return(
        <div className="Storys">
           <img src={props.img} alt="" />
           <p>{props.nome}</p>
        </div>
    )
}

export default Storys