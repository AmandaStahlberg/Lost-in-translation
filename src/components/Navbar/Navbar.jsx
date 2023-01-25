import { NavLink } from "react-router-dom"
import { useUser } from "../../context/UserContext"
import { storageDelete } from "../../utils/storage";
import { STORAGE_KEY_USER } from "../../const/storageKeys";


const Navbar = () => {
    const {user, setUser} = useUser()
    const handleLogoutClick = () => {
        if (window.confirm("Are you sure?")) {
          storageDelete(STORAGE_KEY_USER);
          setUser(null);
        }
      };

    return (
        <nav className="fixed">
            <ul>
                <li>Lost in Translations</li>
            </ul>
            { user != null &&
                <ul>
                    <li>
                        <NavLink to="/translate">Translate</NavLink>
                    </li>
                    <li>
                        <NavLink to="/profile">Profile</NavLink>
                    </li>
                    <button className="flex justify-center items-center btn-secondary rounded-full" onClick={handleLogoutClick}>Logout</button>

                </ul>
            }

        </nav>
    )
}

export default Navbar