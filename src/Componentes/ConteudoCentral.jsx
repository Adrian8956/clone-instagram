import Storys from "./Storys"
import galo from '../assets/galo.jpg'
import negoney from '../assets/negoney.jpg'
import chico from '../assets/chico.webp'
import neymar from '../assets/neymar.webp'
import manoel from '../assets/manoel.jpg'
import bruninho from '../assets/bruninho.jpg'
import mike from '../assets/mike.png'
import Post from "./Post"
import Post2 from "./Post2"
import Post3 from "./Post3"
function ConteudoCentral(){
    return(
        <div className="ConteudoCentral">
           <div className="header">
              <Storys img={galo} nome="galo_cego"/>
              <Storys img={negoney} nome="negoney"/>
              <Storys img={chico} nome="chico_moedas"/>
              <Storys img={neymar} nome="neymarjr"/>
              <Storys img={manoel} nome="manoel_gomes"/>
              <Storys img={bruninho} nome="brunomars"/>
              <Storys img={mike} nome="mike_baguncinha"/>
              
           </div>
           <div className="principal">
               <Post></Post>
               <Post2></Post2>
               <Post3></Post3>
           </div>
        </div>
    )
}

export default ConteudoCentral