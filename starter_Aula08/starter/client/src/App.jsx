import Cabecalho from "./componentes/Cabecalho";
import Rodape from "./componentes/Rodape";
import Home from "./paginas/Home";
import Detalhe from "./paginas/Detalhe";
import NaoEncontrada from "./paginas/NaoEncontrada";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom"; 

function App() {
  return (
    
    <BrowserRouter>
    <Cabecalho/>
  <Routes>
<Route path="/" element ={<Home/>}></Route>
<Route path="/lugares/:id" element={<Detalhe/>}/>
<Route path ="*" element={<NaoEncontrada/>}/>
   </Routes>
    <Rodape/>
    </BrowserRouter>
  );
}

export default App;
