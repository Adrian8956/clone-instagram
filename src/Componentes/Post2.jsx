import Headerpost from "./Headerpost"
import Publicacao from "./Publicacao"
import felca from '../assets/felca.jpg'
import felcabase from '../assets/felcabase.jpg'
import TaskBar from "./TaskBar"
import Likes from "./Likes"
import Descricao from "./Descricao"
import Comentario from "./Comentario"
import Comentar from "./Comentar"
function Post2(){
   return(
      <div className="post">
        <Headerpost 
        img={felca}
        nome="felca"
        hora="3 h">
        </Headerpost>
        <Publicacao img={felcabase}></Publicacao>
        <TaskBar></TaskBar>
        <Likes numero='600' texto="likes"></Likes>
        <Descricao nome="felca" texto="Base da Virginia"></Descricao>
        <Comentario numero="700"></Comentario>
        <Comentar></Comentar>
      </div>
   )
}

export default Post2