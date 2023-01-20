import { Link} from "react-router-dom"

const ProfileActions = () => {
    return (
        <ul>
            <li><Link to ="/translate">Translations</Link></li>
            <li><button>Clear history</button></li>
            <button>Logout</button>
        </ul>
    )
}

export default ProfileActions