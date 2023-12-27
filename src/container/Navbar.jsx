import { useState } from 'react';
import Navbar from '../components/Navbar';
import { useUser } from '../actions/store/auth';
import { useEffect } from 'react';

const NavbarImpl = () => {
    const { user, logout } = useUser();
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (user && user.needSurvey) {
            setOpen(true)
        }
    }, [user])
    return (
        <Navbar
          username={user?.name}
          onLogout={logout}
          openSurvey={open}
          onCloseSurvey={() => setOpen(false)}
        />
    )
}

export default NavbarImpl;