import { NavLink } from 'react-router-dom';
import './components.css'

export const NavBar = () => {
    return (
        <nav className='nav'>
            <ul>
                <li>
                    <NavLink className='nl' to='/'>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink className='nl' to='productos'>
                        Productos
                    </NavLink>
                </li>
                <li>
                    <NavLink className='nl' to='mi-carro'>
                        Carro
                    </NavLink>
                </li>
                <li>
                    <NavLink className='nl' to='cuenta'>
                        Cuenta
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
