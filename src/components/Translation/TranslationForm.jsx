import { useState } from "react"
import { useForm } from "react-hook-form"


const TranslationForm = ({ onTranslation }) => {
    const {register, handleSubmit, formState: {errors}} = useForm()

    const onSubmit = ({ message }) => {
        onTranslation(message)
        translateInput(message)
    }


    const [imageArray, setImageArray] = useState([]);


    // imageArray = [1,2,3]
    //fixa mellanslag
    const translateInput = (str) => {
        let string = str.toLowerCase()
        let tempImageArray = []
        for (let i in string){
           tempImageArray.push( string[i]+".png")
        }
        setImageArray (tempImageArray)
    }
    const errorMessage = (() => {
        if(!errors.message){
            return null
        }
        if (errors.message.type ==='required'){
            return  <span>You need to write something</span>
        }
        if (errors.message.type ==='pattern'){
            return <span>Only use english alphbet (a to z) and space </span>
        }
    })()
     
    const messageConfig = {
        required: true,
        pattern: /^[a-zA-Z][a-zA-Z ]*$/
    }

    return(
        <form onSubmit={ handleSubmit(onSubmit) }>
            <fieldset>
                <label htmlFor="message">Write your message here:</label>
                <input type="text"{...register('message',messageConfig)} placeholder="Hello" />
                {errorMessage}
            </fieldset>
            <button type="submit">Translate2</button>
            {imageArray.map((image,index) => {
                return image === " .png"  ? <span key={index}>SPACE</span> :
            <img key={index} alt="hej" src={`./assets/${image}`}/>
            })} 
        </form>
    )
}
export default TranslationForm