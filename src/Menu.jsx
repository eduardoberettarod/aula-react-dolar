import './Menu.css'

function Menu() {
    return (
        <>
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <button
                    className='navbar-toggler m-auto'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#navbarNav'
                >
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarNav'>
                    <ul className='navbar-nav m-auto text-center'>
                        <li className='nav-item'>
                            <a className='nav-link' href='#'>
                                Calculadora de Dólar
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Menu