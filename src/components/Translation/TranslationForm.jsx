import { useForm } from "react-hook-form"


const TranslationForm = ({ onTranslation }) => {
    const {register, handleSubmit} = useForm()

    const onSubmit = ({ message }) => {
        onTranslation(message)
        translateInput(message)
        console.log(imageArray)
    
    }

    const testString = "Hej"

    let imageArray = []


    const translateInput = (str) => {
        let string = str.toLowerCase()
        for (let i in string){
           imageArray.push( string[i]+".png")
        }
        return imageArray;
    }

     

    return(
        <form onSubmit={ handleSubmit(onSubmit) }>
            <fieldset>
                <label htmlFor="message">Write your message here:</label>
                <input type="text"{...register('message')} placeholder="Hello" />
            </fieldset>
            <button type="submit">Translate2</button>
            {imageArray.map((image,index) => (<img key={index} alt="hej" src={`./assets/${image}`}/>))} 
        </form>
    )
}
export default TranslationForm