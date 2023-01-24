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
        <form className="bg-green h-full rounded-3xl flex flex-col justify-between " onSubmit={ handleSubmit(onSubmit) }>
            <div className="flex bg-lightGreen">
            {imageArray.map((image,index) => {
                return image === " .png"  ? <span key={index}>SPACE</span> :
                <img className="max-h-14 w-fit" key={index} alt="hej" src={`./assets/signs/${image}`}/>
            })} 
            </div>
            <div className=" flex flex-col justify-center">
                {errorMessage}
            <fieldset className="inputDiv">
                {/* <label htmlFor="message">Write your message here:</label> */}
                <input className="w-full rounded border-gray-900 h-10 w-4/5" type="text"{...register('message',messageConfig)} placeholder="Type what you want to translate here!" />
            <button type="submit">pil till höger</button>
            </fieldset>
            </div>
        </form>
    )
}
export default TranslationForm