function Storys(props){
    return(
        <div className="storys">
           <div className="borderStorys">
              <img src={props.img} alt="" />
           </div>
            <p>{props.nome}</p>
        </div>
    )
}

export default Storys