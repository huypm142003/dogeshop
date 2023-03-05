import Header from './Header';
import Footer from './Footer';
import { Routes, Route } from 'react-router-dom';
import routes from '../routes';

const DefaultLayout = () => {
    return ( 
        <>
            <Header />
            <Routes>
                {routes.map((route, index) => (
                    <Route key={index} path={route.path} element={route.component} />
                ))}
            </Routes>
            <Footer />
        </>
     );
}
 
export default DefaultLayout;