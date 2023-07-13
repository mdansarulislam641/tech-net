import {createBrowserRouter} from 'react-router-dom';
import Home from '../pages/ui/Home';
import Login from '../pages/ui/Login';
import App from '../App';
const router = createBrowserRouter([
    {
        path : '/',
        element : <App/>
    },
    {
        path : '/home',
        element : <Home/>
    },
    {
        path : '/login',
        element : <Login/>
    }
]);

export default router ;