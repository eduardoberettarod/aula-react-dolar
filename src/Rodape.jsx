import './Rodape.css'

function Rodape() {
    return (
        <>
            <footer className='text-center bg-dark text-white p-3'>
                <p>
                    Desenvolvido por &nbsp;
                    <a href='https://www.linkedin.com/in/eduardo-beretta-a597ba356/'
                        target='blank' className='text-success'>Eduardo Beretta</a>
                    &nbsp; disponível no &nbsp;
                    <a href='https://github.com/eduardoberettarod/aula-react-dolar' target='blank' className='text-success'>GitHub</a>
                </p>
            </footer>
        </>
    )
}

export default Rodape