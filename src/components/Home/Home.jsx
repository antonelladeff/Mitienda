import { Link } from 'react-router-dom'
import './home.css';

const Home = () => {
    return (
        <div className='home'>
            <h1>Bienvenido a mi tienda Online</h1>
            <Link to={'/products'} className='b-home'>Ver todos los productos</Link>
        </div>
    )
}

export default Home