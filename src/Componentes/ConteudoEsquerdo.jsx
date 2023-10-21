import ItemMenu from "./Itemmenu"
import {BsInstagram} from 'react-icons/bs'
import {AiFillHome} from 'react-icons/ai'
import {BiSearch} from 'react-icons/bi'
import {AiOutlineCompass} from 'react-icons/ai'
import {FaClapperboard} from 'react-icons/fa6'
import {RiMessengerLine} from 'react-icons/ri'
import {AiOutlineHeart} from 'react-icons/ai'
import {FiPlusSquare} from 'react-icons/fi'
import {CgProfile} from 'react-icons/cg'
import {SiThreads} from 'react-icons/si'
import {FaBars} from 'react-icons/fa'
function ConteudoEsquerdo(){
    return(
        <div className="conteudoesquerdo">
          <div className="desktopIcon">
            <div className="logo">
            <ItemMenu icone={<BsInstagram/>} nome={"Instagram"}></ItemMenu>
            </div>
            <div className="iconesEsquerdos">
                <ItemMenu icone={<AiFillHome/>} nome={"Página inicial"}></ItemMenu>
                <ItemMenu icone={<BiSearch/>} nome={"Pesquisar"}></ItemMenu>
                <ItemMenu icone={<AiOutlineCompass/>} nome={"Explorar"}></ItemMenu>
                <ItemMenu icone={<FaClapperboard/>} nome={"Reels"}></ItemMenu>
                <ItemMenu icone={<RiMessengerLine/>} nome={"Mensagens"}></ItemMenu>
                <ItemMenu icone={<AiOutlineHeart/>} nome={"Notificações"}></ItemMenu>
                <ItemMenu icone={<FiPlusSquare/>} nome={"Criar"}></ItemMenu>
                <ItemMenu icone={<CgProfile/>} nome={"Perfil"}></ItemMenu>
            </div>
            <div className="mais">
            <ItemMenu icone={<SiThreads/>} nome={"Threads"}></ItemMenu>
            <ItemMenu icone={<FaBars/>} nome={"Mais"}></ItemMenu>
            </div>
           </div>
           <div className="mobileIcon">
              <ItemMenu icone={<AiFillHome/>}></ItemMenu>
              <ItemMenu icone={<BiSearch/>}></ItemMenu>
              <ItemMenu icone={<FiPlusSquare/>}></ItemMenu>
              <ItemMenu icone={<FaClapperboard/>}></ItemMenu>
              <ItemMenu icone={<CgProfile/>}></ItemMenu>
           </div>
           
        </div>
    )
}

export default ConteudoEsquerdo