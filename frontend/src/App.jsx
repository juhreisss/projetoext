import './App.css';
import BarraNavegacao from './componentes/BarraNavegacao';
import Inicio from './paginas/Inicio';
import Rodape from './componentes/Rodape';

function App() {
  return (
    <div className="site">
      <BarraNavegacao />
      <Inicio />
      <Rodape />
    </div>
  );
}

export default App;