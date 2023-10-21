
import './App.css'
import ConteudoEsquerdo from './Componentes/ConteudoEsquerdo'
import ConteudoCentral from './Componentes/ConteudoCentral'
import ConteudoDireito from './Componentes/ConteudoDireito'
function App() {
  
  return (
    <main className='container'>
      <ConteudoEsquerdo/>
      <ConteudoCentral/>
      <ConteudoDireito/>
    </main>
  )
}

export default App
