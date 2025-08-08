import './CalcMt.css'
import { TbRulerMeasure } from "react-icons/tb";

function CalcMt() {

    const calcularMt = (function () {
        const mt = document.getElementById('mt').value
        const totalMt = mt * 100

        if (mt === "") {
            alert("Por favor, preencha todos os campos antes de converter.");
            return;
        }
        if (isNaN(mt)) {
            alert("Digite valores numéricos válidos.");
            return;
        }

        alert("O valor informado em metros equivale a " + totalMt + " centímetros.");

    })

    return (
        <>
            <form className='w-25 m-auto pt-5 pb-5'>
                <div className='form-group mb-3'>
                    <label htmlFor='reais'>Valor em Metros</label>
                    <input type='text' className='form-control' id='mt' />
                </div>
                <button type="button" onClick={calcularMt} className="btn btn-primary w-100">
                    Calcular  <TbRulerMeasure size={20} color='white' />
                </button>

            </form>
        </>
    )
}

export default CalcMt