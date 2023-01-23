import { useState } from "react"
import { useForm } from "react-hook-form"


const TranslationForm = ({ onTranslation }) => {
    const {register, handleSubmit} = useForm()

    const onSubmit = ({ message }) => {
        onTranslation(message)
        translateInput(message)
    }

    const testString = "Hej"

    const [imageArray, setImageArray] = useState([]);


    // imageArray = [1,2,3]
    //fixa mellanslag!
    const translateInput = (str) => {
        let string = str.toLowerCase()
        let tempImageArray = []
        for (let i in string){
           tempImageArray.push( string[i]+".png")
        }
        setImageArray (tempImageArray)
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