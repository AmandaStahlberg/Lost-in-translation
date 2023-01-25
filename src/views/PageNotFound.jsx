import { ImArrowLeft2 } from "react-icons/im";
import { useNavigate } from "react-router";



const PageNotFound = () => {

    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1)
    }
    
    return (
        <div className="flex justify-center items-center h-screen flex-col">
            <img src="./assets/404.gif" alt="" />
            <p className="font-bold">Oups.. Something went wrong, page not found.</p>
            <button className="btn-secondary rounded-full mt-5 flex items-center justify-center" onClick={goBack}> <ImArrowLeft2/> &nbsp; <p className="font-extrabold">Go back</p></button>
        </div>
    )
}

export default PageNotFound;