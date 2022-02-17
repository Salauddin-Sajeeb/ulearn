import { useContext } from 'react';
import { authContext } from '../Context/AuthProvider';


const Useauth = () => {

    const auth = useContext(authContext);
    return auth;


}

export default Useauth;