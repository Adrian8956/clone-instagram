import Headerpost from "./Headerpost"
import Publicacao from "./Publicacao"
import luva from '../assets/luva.jpg'
import devolva from '../assets/devolva.jpg'
import TaskBar from "./TaskBar"
import Likes from "./Likes"
import Descricao from "./Descricao"
import Comentario from "./Comentario"
import Comentar from "./Comentar"
function Post3(){
   return(
      <div className="post">
        <Headerpost 
        img={luva}
        nome="luvadepedreiro"
        hora="5 min">
        </Headerpost>
        <Publicacao img={devolva}></Publicacao>
        <TaskBar></TaskBar>
        <Likes numero='1000' texto="likes"></Likes>
        <Descricao nome="luvadepedreiro" texto="Devolva!!"></Descricao>
        <Comentario numero="5000"></Comentario>
        <Comentar></Comentar>
      </div>
   )
}

export default Post3