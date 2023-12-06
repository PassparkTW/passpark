import Navbar from '../components/Navbar';
import { useUser } from '../actions/store/auth';

const NavbarImpl = () => {
    const { user } = useUser();
    console.log(user)
    return (
        <Navbar username={user.username} />
    )
}

export default NavbarImpl;