import Headerpost from "./Headerpost"
import Publicacao from "./Publicacao"
import manoel from '../assets/manoel.jpg'
import bluepen from '../assets/bluepen.webp'
import TaskBar from "./TaskBar"
import Likes from "./Likes"
import Descricao from "./Descricao"
import Comentario from "./Comentario"
import Comentar from "./Comentar"
function Post(){
   return(
      <div className="post">
        <Headerpost 
        img={manoel}
        nome="manoel_gomes"
        hora="1 h">
        </Headerpost>
        <Publicacao img={bluepen}></Publicacao>
        <TaskBar></TaskBar>
        <Likes numero='500' texto="likes"></Likes>
        <Descricao nome="manoel_gomes" texto="Caneta azul, azul caneta!"></Descricao>
        <Comentario numero="700"></Comentario>
        <Comentar></Comentar>
      </div>
   )
}

export default Post