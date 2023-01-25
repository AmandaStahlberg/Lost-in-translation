import { storageSave } from "../../utils/storage";
import { useUser } from "../../context/UserContext";
import { STORAGE_KEY_USER } from "../../const/storageKeys";
import { translationClearHistory } from "../../api/translate";

const ProfileClearHistory = () => {
  const { user, setUser } = useUser();

  const handleClearHistoryClick = async () => {
    if(!window.confirm('Are you sure? \nThis can not be undone.')) {
      return
    }
    const [clearError ] = await translationClearHistory(user.id)
    if(clearError !== null) {
      return
    }
    const updatedUser = {
      ...user,
      translations: []
    }
    storageSave(STORAGE_KEY_USER, updatedUser)
    setUser(updatedUser)
  }

  return (
    <div className="md:absolute left-0">
      {/* <li>
        <Link to="/translate">Translations</Link>
      </li> */}
        <button className="flex justify-center items-center btn-primary rounded-full" onClick={ handleClearHistoryClick }>Clear history</button>
    </div>
  );
};

export default ProfileClearHistory;
