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
        <nav className="bg-white/[.09] px-8 fixed flex flex-row justify-between items-center w-full h-36 md:h-20">
            <div>
            <ul>
                <li>
                        <NavLink className="navbar-home text-4xl font-medium" to="./">Lost in Translations</NavLink></li>
            </ul>
            </div>
            { user != null &&
            <div className="flex justify-end">
                <ul className= "flex items-center gap-x-8 flex-col md:flex-row">
                    <li>
                        <NavLink className="navbar-link" to="/translate">Translate</NavLink>
                    </li>
                    <li>
                        <NavLink className="navbar-link" to="/profile">Profile</NavLink>
                    </li>
                    <button className="flex justify-center items-center btn-secondary rounded-full" onClick={handleLogoutClick}>Logout</button>

                </ul>
            </div>
            }

        </nav>
    )
}

export default Navbar