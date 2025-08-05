import './Titulo.css'

function Titulo() {

    return (
        <>
            <div className='text-center'>
                <h1 className='display-3 notable-regular'>Calculadora de Dólar</h1>
                <img src='/public/dollar.png' width='50' className='img-fluid' />
            </div>
        </>
    )
}

export default Titulo