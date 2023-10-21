import Itemdireito from "./Itemdireito"
import adrian from "../assets/adrian.jpg"
import cocielo from "../assets/cocielo.jpg"
import program from "../assets/program.jpg"
import sujeito from "../assets/sujeito.jpg"
import jude from "../assets/jude.jpg"
import gabs from "../assets/gabs.jpg"
function ConteudoDireito(){
    return(
        <div className="conteudodireito">
          <div className="perfil">
          <Itemdireito img={adrian}
          usuario={"adrian_almeida"}
          nome={"Adrian Almeida"}
          opcao={"mudar"}></Itemdireito>
          </div>
          <div className="sugestao">
            <p>Sugestões para ti</p>
            <a href="#">Ver todas</a>
          </div>
          <div className="seguir">
            <Itemdireito img={cocielo} 
            usuario={"cocielo"}
            nome={"Júlio cocielo"}
            opcao={"Seguir"}></Itemdireito>
            <Itemdireito img={program}
            usuario={"progbr"}
            nome={"Igor Oliveira"}
            opcao={"Seguir"}></Itemdireito>
            <Itemdireito img={sujeito}
            usuario={"sujeitoprogramador"}
            nome={"Matheus Fraga"}
            opcao={"Seguir"}></Itemdireito>
            <Itemdireito img={jude}
            usuario={"judebellingham"}
            nome={"Jude Bellingham"}
            opcao={"Seguir"}></Itemdireito>
            <Itemdireito img={gabs}
            usuario={"gab.augustoz"}
            nome={"Gabriel Augusto"}
            opcao={"Seguir"}></Itemdireito>
          </div>
          <footer>
             <div className="infos">
                <p>Sobre</p>
                <p>ajuda</p>
                <p>Imprensa</p>
                <p>API</p>
                <p>Empregos</p>
                <p>Privacidade</p>
                <p>Termos</p>
                <p>Localização</p>
                <p>Idiomas</p>
                <p>Verificação</p>
             </div>
             <h5>&copy; INSTAGRAM FROM ADRIAN</h5>
          </footer>
        </div>
    )

}

export default ConteudoDireito