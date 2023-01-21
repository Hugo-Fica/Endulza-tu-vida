import { Route, Routes } from 'react-router-dom';
import { NavBar } from '../components';
import { SweetensRoutes } from '../sweetens/routes/SweetensRoutes';


export const AppRoutes = () => {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path='/*' element={<SweetensRoutes />} />
            </Routes>
        </>
    );
}
