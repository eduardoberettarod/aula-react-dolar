import './CalcCm.css'
import { TbRulerMeasure } from "react-icons/tb";

function CalcCm() {

    const calcularCm = (function () {
        const cm = document.getElementById('cm').value.trim();
        const totalCm = cm / 100 


        if (cm === "") {
            alert("Por favor, preencha todos os campos antes de converter.");
            return;
        }
        if (isNaN(cm)) {
            alert("Digite valores numéricos válidos.");
            return;
        }

        alert("Resultado: o valor convertido para metros é " + totalCm + "m.");

    })

    return (
        <>
            <form className='w-25 m-auto pt-5 pb-5'>
                <div className='form-group mb-3'>
                    <label htmlFor='reais'>Valor em Centímetros</label>
                    <input type='text' className='form-control' id='cm' />
                </div>
                <button type="button" onClick={calcularCm} className="btn btn-primary w-100">
                    Calcular  <TbRulerMeasure size={20} color='white' />
                </button>

            </form>
        </>
    )
}

export default CalcCm