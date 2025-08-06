import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import './App.css';
import Titulo from './Titulo';
import Rodape from './Rodape';
import Menu from './Menu';
import Banner from './Banner'

function App() {

  return (
    <>
      <div className='container'>
        <Titulo />
        <Menu />
        <Banner />
      </div>
      <Rodape />
    </>
  )
}

export default App
