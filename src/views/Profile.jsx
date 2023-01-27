import { useEffect } from "react";
import { userById } from "../api/user";
import ProfileHeader from "../components/Profile/ProfileHeader";
import ProfileTranslationHistory from "../components/Profile/ProfileTranslationHistory";
import { STORAGE_KEY_USER } from "../const/storageKeys";
import { useUser } from "../context/UserContext";
import withAuth from "../hoc/withAuth";
import { storageSave } from "../utils/storage";

const Profile = () => {
  const { user, setUser } = useUser();

  useEffect(() => {
    const findUser = async () => {
      const [error, latestUser] = await userById(user.id);
      if (error == null) {
        storageSave(STORAGE_KEY_USER, latestUser);
        setUser(latestUser);
      }
    };
    findUser();
  }, [setUser, user.id]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col h-5/6 justify-evenly items-center w-full flex-wrap-reverse">
        <ProfileHeader username={user.username} />
        <ProfileTranslationHistory translations={user.translations} />
      </div>
    </div>
  );
};
export default withAuth(Profile);
