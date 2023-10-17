import ItemMenu from './ItemMenu';
import logoInsta from '../assets/instagram.png'
import {MdHomeFilled} from 'react-icons/md'
import {FiSearch} from 'react-icons/fi'
import {MdOutlineExplore} from 'react-icons/md'
import {BiMoviePlay} from 'react-icons/bi'
import {BiSolidPaperPlane} from 'react-icons/bi'
import {AiOutlineHeart} from 'react-icons/ai'
import {AiOutlinePlusSquare} from 'react-icons/ai'
function ConteudoEsquerdo(){
  return(
    <div className="ConteudoEsquerdo">
      <div className="wrapLogo">
        <img src={logoInsta} alt="" className='logoImg'/>
      </div>
      <div className="wrapMenu">
         <ul className='menu'>
           <ItemMenu icone={<MdHomeFilled/>} texto ="Página inicial"/>
           <ItemMenu icone={<FiSearch/>} texto="Pesquisar"/> 
           <ItemMenu icone={<MdOutlineExplore/>} texto="Explorar"/>
           <ItemMenu icone={<BiMoviePlay/>} texto="Reels"/> 
           <ItemMenu icone={<BiSolidPaperPlane/>} texto="Mensagem"/>
           <ItemMenu icone={<AiOutlineHeart/>} texto="Notificação"/>
           <ItemMenu icone={<AiOutlinePlusSquare/>} texto="Criar"/>
           <ItemMenu icone={<AiOutlinePlusSquare/>} texto="Perfil"/>
           <ItemMenu icone={<AiOutlinePlusSquare/>} texto="Mais"/>
         </ul>
      </div>
    </div>

  )
}

export default ConteudoEsquerdo