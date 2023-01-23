import { useForm } from "react-hook-form"


const TranslationForm = () => {
    const {register, handleSubmit} = useForm()
    const onSubmit = data => {
        console.log( data)
    }
    return(
        <form onSubmit={ handleSubmit(onSubmit) }>
            <fieldset>
                <label htmlFor="message">Write your message here:</label>
                <input type="text"{...register('message')} placeholder="Hello" />
            </fieldset>
            <button type="submit">Translate2</button>
        </form>
    )
}
export default TranslationForm