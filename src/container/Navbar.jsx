import Navbar from '../components/Navbar';
import { useUser } from '../actions/store/auth';
import { useEffect } from 'react';
import { getUserData } from '../actions/actions';

const NavbarImpl = () => {
    const { user, login } = useUser();
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            return
        }
        (async () => {
            const userInfo = await getUserData()
            if (userInfo) {
                const { name: username, email } = userInfo
                login({username, email})
            }
        })()
    }, [])
    return (
        <Navbar username={user.username} />
    )
}

export default NavbarImpl;