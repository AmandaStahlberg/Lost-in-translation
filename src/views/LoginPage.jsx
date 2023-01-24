import LoginForm from "../components/Login/LoginForm";
import LoginImage from "../components/Login/LoginImage";

const Login = () => {
    return(
        <>
        <div className="flex flex-row flex-auto items-center" >
        <LoginImage/>
        <LoginForm/>
        </div>
        </>
    

    )
}
export default Login;