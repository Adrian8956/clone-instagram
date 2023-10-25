<<<<<<< HEAD
import Storys from "./Storys"
import Post from "./Post"
import perfilcr7 from '../assets/perfilcr7.png'
import messiperfil from '../assets/messiperfil.png'
import vini from '../assets/vini.jpg'
import gaules from '../assets/gaules.jpg'
import coringa from '../assets/coringa.jpg'
import proa from '../assets/proa.jpg'
import loud from '../assets/loud.jpg'
import rockt from '../assets/rocktseat.jpg'
import adrian from "../assets/adrian.jpg"
import {AiOutlineHeart} from 'react-icons/ai'
import {RiMessengerLine} from 'react-icons/ri'
import logo from "../assets/Instagram_logo.png"
import groot from "../assets/groot.jpg"
import perfil_groot from "../assets/perfil_groot.jpeg"
import perfil_loki from "../assets/loki_series.jpg"
import loki from "../assets/loki.webp"
import perfil_wanda from "../assets/perfil_wanda.jpg"
import wanda from "../assets/wanda.jpg"
import perfil_moana from "../assets/perfil_moana.jpg"
import moana from "../assets/moana-capa.jpg"
import relampago from "../assets/relampago.png"
function ConteudoCentral(){
    return(
        <div className="conteudocentral">
           <header> 
              <div className="mobile">
                 <img src={logo} alt="" />
                 <div className="iconeMobile">
                    <li><AiOutlineHeart/></li>
                    <li><RiMessengerLine/></li>
                 </div>
              </div>
              <div className="storysMobile">
                <Storys img={perfilcr7} nome={"cristiano"}></Storys>
                <Storys img={messiperfil} nome={"leomessi"}></Storys>
                <Storys img={vini} nome={"vinijr"}></Storys>
                <Storys img={gaules} nome={"gaules"}></Storys>
                <Storys img={coringa} nome={"loud_victor"}></Storys>
                <Storys img={proa} nome={"instituto.proa"}></Storys>
                <Storys img={loud} nome={"loudgg"}></Storys>
                <Storys img={rockt} nome={"rocketseat"}></Storys>
                <Storys img={perfil_groot} nome={"groot"}></Storys>
                <Storys img={relampago} nome={"relampago..."}></Storys>
                <Storys img={perfil_loki} nome={"loki"}></Storys>
                <Storys img={perfil_moana} nome={"moana"}></Storys>
              </div>
           </header>
           <div className="principal">
               <Post img={perfil_groot}
               usuario={"groot"}
               tempo={"1h"}
               post={groot}
               likes={"2.000"}
               texto={"Eu sou o Groot !!!"}
               comentarios={"5.000"}></Post>

               <Post img={loki}
               usuario={"loki"}
               tempo={"5 min"}
               post={perfil_loki}
               likes={"3.000"}
               texto={"Assistam a minha serie!!"}
               comentarios={"6.000"}></Post>

               <Post img={perfil_wanda}
               usuario={"wanda_maximoff"}
               tempo={"3h"}
               post={wanda}
               likes={"10.000"}
               texto={"Meditando..."}
               comentarios={"15.000"}></Post>
              
               <Post img={perfil_moana}
               usuario={"moana"}
               tempo={"50 min"}
               post={moana}
               likes={"1.000"}
               texto={"💪🏾💚"}
               comentarios={"2.000"}></Post>

               <Post img={relampago}
               usuario={"relampago_mcqueen"}
               tempo={"1h"}
               post={relampago}
               likes={"50.000"}
               texto={"Katchau ⚡⚡"}
               comentarios={"60.000"}></Post>
           </div>
        </div>
    )
}

=======
import Storys from "./Storys"
import Post from "./Post"
import perfilcr7 from '../assets/perfilcr7.png'
import messiperfil from '../assets/messiperfil.png'
import vini from '../assets/vini.jpg'
import gaules from '../assets/gaules.jpg'
import coringa from '../assets/coringa.jpg'
import proa from '../assets/proa.jpg'
import loud from '../assets/loud.jpg'
import rockt from '../assets/rocktseat.jpg'
import adrian from "../assets/adrian.jpg"
import {AiOutlineHeart} from 'react-icons/ai'
import {RiMessengerLine} from 'react-icons/ri'
import logo from "../assets/Instagram_logo.png"
import groot from "../assets/groot.jpg"
import perfil_groot from "../assets/perfil_groot.jpeg"
import perfil_loki from "../assets/loki_series.jpg"
import loki from "../assets/loki.webp"
import perfil_wanda from "../assets/perfil_wanda.jpg"
import wanda from "../assets/wanda.jpg"
import perfil_moana from "../assets/perfil_moana.jpg"
import moana from "../assets/moana-capa.jpg"
import relampago from "../assets/relampago.png"
function ConteudoCentral(){
    return(
        <div className="conteudocentral">
           <header> 
              <div className="mobile">
                 <img src={logo} alt="" />
                 <div className="iconeMobile">
                    <li><AiOutlineHeart/></li>
                    <li><RiMessengerLine/></li>
                 </div>
              </div>
              <div className="storysMobile">
                <Storys img={perfilcr7} nome={"cristiano"}></Storys>
                <Storys img={messiperfil} nome={"leomessi"}></Storys>
                <Storys img={vini} nome={"vinijr"}></Storys>
                <Storys img={gaules} nome={"gaules"}></Storys>
                <Storys img={coringa} nome={"loud_victor"}></Storys>
                <Storys img={proa} nome={"instituto.proa"}></Storys>
                <Storys img={loud} nome={"loudgg"}></Storys>
                <Storys img={rockt} nome={"rocketseat"}></Storys>
                <Storys img={perfil_groot} nome={"groot"}></Storys>
                <Storys img={relampago} nome={"relampago..."}></Storys>
                <Storys img={perfil_loki} nome={"loki"}></Storys>
                <Storys img={perfil_moana} nome={"moana"}></Storys>
              </div>
           </header>
           <div className="principal">
               <Post img={perfil_groot}
               usuario={"groot"}
               tempo={"1h"}
               post={groot}
               likes={"2.000"}
               texto={"Eu sou o Groot !!!"}
               comentarios={"5.000"}></Post>

               <Post img={loki}
               usuario={"loki"}
               tempo={"5 min"}
               post={perfil_loki}
               likes={"3.000"}
               texto={"Assistam a minha serie!!"}
               comentarios={"6.000"}></Post>

               <Post img={perfil_wanda}
               usuario={"wanda_maximoff"}
               tempo={"3h"}
               post={wanda}
               likes={"10.000"}
               texto={"Meditando..."}
               comentarios={"15.000"}></Post>
              
               <Post img={perfil_moana}
               usuario={"moana"}
               tempo={"50 min"}
               post={moana}
               likes={"1.000"}
               texto={"💪🏾💚"}
               comentarios={"2.000"}></Post>

               <Post img={relampago}
               usuario={"relampago_mcqueen"}
               tempo={"1h"}
               post={relampago}
               likes={"50.000"}
               texto={"Katchau ⚡⚡"}
               comentarios={"60.000"}></Post>
           </div>
        </div>
    )
}

>>>>>>> bca7dbca5be92d075914cb3204075b2fb3195579
export default ConteudoCentral