import './CalcDollar.css'
import { RiMoneyDollarCircleFill } from "react-icons/ri";

function CalcDollar() {

    const calcular = () => {
        const reais = document.getElementById('reais').value.trim();
        const cotacao = document.getElementById('cotacao').value.trim();

        // Validação: campo vazio
        if (reais === "" || cotacao === "") {
            alert("Por favor, preencha todos os campos antes de converter.");
            return;
        }

        // Validação: valores numéricos válidos
        if (isNaN(reais) || isNaN(cotacao)) {
            alert("Digite valores numéricos válidos.");
            return;
        }

        const total = parseFloat(reais) / parseFloat(cotacao);
        const totalFormatado = total.toFixed(2); // Exibe com 2 casas decimais

        alert("Conversão concluída: R$" + reais + " equivalem a $" + totalFormatado + " dólares.");
    };

    return (
        <>
            <form className='w-25 m-auto pt-5 pb-5'>
                <div className='form-group mb-3'>
                    <label htmlFor='reais'>Valor em Reais</label>
                    <input type='text' className='form-control' id='reais' />
                </div>
                <div className='form-group mb-3'>
                    <label htmlFor='cotacao'>Cotação do Dólar</label>
                    <input type='text' className='form-control' id='cotacao' />
                </div>
                <button type="button" onClick={calcular} className="btn btn-primary w-100 d-flex justify-content-center align-items-center gap-2">
                    Calcular
                    <RiMoneyDollarCircleFill size={20} color="white" />
                </button>
            </form>
        </>
    );
}

export default CalcDollar;
