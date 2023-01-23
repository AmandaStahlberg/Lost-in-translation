import TranslationButton from "../components/Translation/TranslationButton";
import TranslationForm from "../components/Translation/TranslationForm";
import withAuth from "../hoc/withAuth";

const Translate = () => {
    return(
    <> 
        <h1>Translate</h1> 
        <section id="translate-button">
            <TranslationButton name="Translate" key="translate"/>
        </section>
        <section id="translate2">
            <TranslationForm/>
        </section>
    </>
    )
}
export default withAuth(Translate);