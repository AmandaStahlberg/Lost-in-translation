import { translationAdd } from "../api/translate";
import TranslationButton from "../components/Translation/TranslationButton";
import TranslationForm from "../components/Translation/TranslationForm";
import { STORAGE_KEY_USER } from "../const/storageKeys";
import { useUser } from "../context/UserContext";
import withAuth from "../hoc/withAuth";
import { storageSave } from "../utils/storage";

const Translate = () => {
  const { user, setUser } = useUser();
  const handleTranslationClicked = async (text) => {
    const [error, updatedUser] = await translationAdd(user, text);
    if (error !== null) {
      return;
    }
    storageSave(STORAGE_KEY_USER, updatedUser);
    setUser(updatedUser);
    console.log("Error", error);
    console.log("UpdatedUser", updatedUser);
  };
  return (
    <>
      <h1>Translate</h1>
      <section id="translate-button">
        <TranslationButton name="Translate" key="translate" />
      </section>
      <section id="translate2">
        <TranslationForm onTranslation={handleTranslationClicked} />
      </section>
    </>
  );
};
export default withAuth(Translate);
