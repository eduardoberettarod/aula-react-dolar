import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Titulo from './Titulo';
import Rodape from './Rodape';

function App() {

  return (
    <>
      <div className='container'>
        <Titulo />
      </div>
      <Rodape />
    </>
  )
}

export default App
