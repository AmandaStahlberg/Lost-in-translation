import { useState } from "react"
import { useForm } from "react-hook-form"
import { ImArrowRight2 } from 'react-icons/im';



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
            return <span>Only use english alphabet (a to z) and space </span>
        }
        if (errors.message.type ==='maxLength'){
            return <span>Max length of character is 50</span>
        }
    })()
     
    const messageConfig = {
        required: true,
        pattern: /^[a-zA-Z][a-zA-Z ]*$/,
        maxLength: 50
    }

    return(
        <form className="bg-green rounded-3xl flex flex-col justify-between p-4 min-h-[30rem] min-w-[15rem]" onSubmit={ handleSubmit(onSubmit) }>

            <div className="flex flex-wrap bg-lightGreen rounded-xl">
            {imageArray.map((image,index) => {
                return image === " .png"  ? <span className="w-7" key={index}></span> :
                <img className="max-h-14 w-fit" key={index} alt="hej" src={`./assets/signs/${image}`}/>
            })} 
            </div>
            <div className=" flex flex-col justify-center">
                {errorMessage}
            <fieldset className="inputDiv rounded-xl">
                <input className="w-full rounded-xl h-10 w-4/5 pl-5" type="text"{...register('message',messageConfig)} placeholder="Type what you want to translate here!" />
            <button className="" type="submit"><ImArrowRight2/></button>
            </fieldset>
            </div>
        </form>
    )
}
export default TranslationForm