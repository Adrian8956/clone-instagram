import mccabelinho from '../assets/mccabelinho.jpg'
import pique from '../assets/pique.webp'
import cremosinho from '../assets/cremosinho.png'
import Perfis from "./perfis";
function ConteudoDireito() {
  return (
    <div className="ConteudoDireito">
      <div className="seuperfil">
         <Perfis></Perfis>
      </div>
      <div className="sugestao">
        <p>Sugestões para ti</p>
        <a href="#">Ver todas</a>
      </div>
      <div className="sugestoes">
        <Perfis img={mccabelinho}
        usuario={"mccabelinho"}
        nome={"mc cabelinho"}
        opcao={"Seguir"}></Perfis>
        <Perfis img={pique}
        usuario={"3gerardpique"}
        nome={"Gerard Pique"}
        opcao={"Seguir"}></Perfis>
        <Perfis img={cremosinho}
        usuario={"cremosinho"}
        nome={"cremosinho"}
        opcao={"Seguir"}></Perfis>
        <Perfis></Perfis>
        <Perfis></Perfis>
      </div>

      <footer>
        <p>&copy; INSTAGRAM FROM ADRIAN</p>
      </footer>
    </div>
  );
}

export default ConteudoDireito;