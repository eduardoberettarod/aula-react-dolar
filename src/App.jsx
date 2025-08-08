import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import './App.css';
import Titulo from './Titulo';
import Rodape from './Rodape';
import Menu from './Menu';
import Banner from './Banner'
import CalcDollar from './CalcDollar';
import CalcCm from './CalcCm';
import CalcMt from './CalcMt';
import Titulo2 from './Titulo2';
import Titulo3 from './Titulo3';

function App() {

  return (
    <>
      <div className='container'>
        <Titulo />
        <Menu />
        <Banner />
        <CalcDollar />
        <Titulo2 />
        <CalcCm />
        <Titulo3 />
        <CalcMt />
      </div>
      <Rodape />
    </>
  )
}

export default App
