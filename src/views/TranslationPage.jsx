import { translationAdd } from "../api/translate";
import TranslationButton from "../components/Translation/TranslationButton";
import TranslationForm from "../components/Translation/TranslationForm";
import { useUser } from "../context/UserContext";
import withAuth from "../hoc/withAuth";

const Translate = () => {
    const { user } = useUser();
    const handleTranslationClicked = async (text) => {
        const [error, result] = await translationAdd(user, text)
        console.log(text)
        console.log('error', error)
        console.log('resul', result)
    }
    return(
    <> 
        <h1>Translate</h1> 
        <section id="translate-button">
            <TranslationButton name="Translate" key="translate"/>
        </section>
        <section id="translate2">
            <TranslationForm onTranslation={ handleTranslationClicked }/>
        </section>
    </>
    )
}
export default withAuth(Translate);