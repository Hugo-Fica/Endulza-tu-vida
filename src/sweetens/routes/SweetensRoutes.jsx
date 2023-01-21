import { Navigate, Route, Routes } from 'react-router-dom';
import { Carro, Productos, Sweetens } from '../pages';

export const SweetensRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Sweetens />} />
            <Route path='/productos' element={<Productos />} />
            <Route path='/mi-carro' element={<Carro />} />


            <Route path='/*' element={<Navigate to='/' />} />
        </Routes>
    );
}
