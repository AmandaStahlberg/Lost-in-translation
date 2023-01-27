import { translationAdd } from "../api/translate";
import TranslationForm from "../components/Translation/TranslationForm";
import TranslationImage from "../components/Translation/TranslationImage";
import { STORAGE_KEY_USER } from "../const/storageKeys";
import { useUser } from "../context/UserContext";
import withAuth from "../hoc/withAuth";
import { storageSave } from "../utils/storage";

const Translation = () => {
  const { user, setUser } = useUser();
  const handleTranslationClicked = async (text) => {
    const [error, updatedUser] = await translationAdd(user, text);
    if (error !== null) {
      return;
    }
    storageSave(STORAGE_KEY_USER, updatedUser);
    setUser(updatedUser);
  };
  return (
    <div className="flex items-center justify-center min-h-screen pt-36 md:pt-15">

    <div className="flex flex-row justify-center items-center w-full flex-wrap-reverse">
    <section className="md:w-1/2 min-h-30 mb-20 sm:mb-0" id="translate2">
        <TranslationForm onTranslation={handleTranslationClicked} />
      </section>
      <section id="helloGirl">
      <TranslationImage/>
      </section>
    </div>
    </div>
  );
};
export default withAuth(Translation);
