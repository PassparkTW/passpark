import { useState } from 'react';
import Navbar from '../components/Navbar';
import { useUser } from '../actions/store/auth';
import { useEffect } from 'react';
import { getUserData } from '../actions/actions';

const NavbarImpl = () => {
    const { user, login, logout } = useUser();
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            return
        }
        (async () => {
            const userInfo = await getUserData()
            if (userInfo) {
                const { name: username, email, ['custom:isDoneSurvey']: isDone  } = userInfo
                login({username, email, isDone: isDone === 'true'})
            }
        })()
    }, [])
    useEffect(() => {
        if (user && user.needSurvey) {
            setOpen(true)
        }
    }, [user])
    return (
        <Navbar
          username={user.username}
          onLogout={logout}
          openSurvey={open}
          onCloseSurvey={() => setOpen(false)}
        />
    )
}

export default NavbarImpl;