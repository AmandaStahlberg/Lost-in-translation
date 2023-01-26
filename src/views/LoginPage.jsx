import LoginForm from "../components/Login/LoginForm";
import LoginImage from "../components/Login/LoginImage";
import LoginSpeechBubble from "../components/Login/LoginSpeechBubble";

const Login = () => {
  return (
    <>
      <div>
        <div className="pt-36 md:pt-16 flex flex-col md:flex-row flex-auto items-center">
          <LoginImage />
          <LoginSpeechBubble />
          <LoginForm />
        </div>
      </div>
    </>
  );
};
export default Login;
