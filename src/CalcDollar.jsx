import './CalcDollar.css'

function CalcDollar() {

    const calcular = (function () {
        const reais = document.getElementById('reais').value
        const cotacao = document.getElementById('cotacao').value
        total = reais / cotacao
        alert(cotacao)
    })

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
                <button type='button' onClick={calcular} className='btn btn-primary w-100'>Calcular</button>
            </form>
        </>
    )
}

export default CalcDollar