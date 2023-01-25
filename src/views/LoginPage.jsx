import LoginForm from "../components/Login/LoginForm";
import LoginImage from "../components/Login/LoginImage";
import LoginSpeechBubble from "../components/Login/LoginSpeechBubble";

const Login = () => {
    return(
        <>
        <div className="flex flex-row flex-auto items-center" >
        <LoginImage/>
        <LoginSpeechBubble/>
        <LoginForm/>
        </div>
        </>
    

    )
}
export default Login;