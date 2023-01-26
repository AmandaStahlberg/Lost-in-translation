import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { loginUser } from "../../api/user";
import { storageSave } from "../../utils/storage";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import { STORAGE_KEY_USER } from "../../const/storageKeys";
import { ImArrowRight2 } from "react-icons/im";

const usernameConfig = {
  required: true,
  minLength: 3,
};

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { user, setUser } = useUser();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState(null);

  useEffect(() => {
    if (user !== null) {
      navigate("translate");
    }
    console.log("user has changed", user);
  }, [user, navigate]);

  const onSubmit = async ({ username }) => {
    setLoading(true);
    const [error, userResponse] = await loginUser(username);
    if (error !== null) {
      setApiError(error);
    }
    if (userResponse !== null) {
      storageSave(STORAGE_KEY_USER, userResponse);
      setUser(userResponse);
    }
    setLoading(false);
  };

  const errorMessage = (() => {
    if (!errors.username) {
      return null;
    }
    if (errors.username.type === "required") {
      return <span className="text-center">Username is required</span>;
    }
    if (errors.username.type === "minLength") {
      return (
        <span className="text-center">
          Username is too short <br />
          (minimum 3 characters)
        </span>
      );
    }
  })();

  return (
    <>
      <div className="mt-10 md:m-0 md:float md:right w-full md:w-2/3 flex flex-col items-center ">
        <div className="flex md:pl-20 flex-col space-y-1 items-start w-4/5">
          <h1 className="w-full md:w-1/2 flex  font-extrabold text-4xl md:text-6xl">
            LOST IN TRANSLATION
          </h1>
          <h1 className="w-full md:w-1/2 flex 3xl:text-justify font-bold text-3xl">"BREAKING DOWN BARRIERS, <br /> ONE SIGN AT A TIME!"</h1>
          <p className="w-full md:w-1/2  3xl:text-justify">
          "Lost in Translation" offers a seamless way to translate a text into sign language. 
          Our goal is to provide an easy-to-use platform that helps bridge the communication gap between hearing and non-hearing individuals.
          Just write your name below to get started!
          </p>
          <form className="flex flex-col w-1/2" onSubmit={handleSubmit(onSubmit)}>
            <fieldset className="inputDiv rounded-xl">
              <input type="text"
                className="w-full rounded-xl h-10 "
                placeholder="Enter your name here"
                {...register("username", usernameConfig)}
              />
              <button type="submit" className="" disabled={loading}>
                <ImArrowRight2 />
              </button>
            </fieldset>
            {errorMessage}
              {loading && <p>Logging in...</p>}
              {apiError && <p>{apiError}</p>}
          </form>
        </div>
      </div>
    </>
  );
};
export default LoginForm;
