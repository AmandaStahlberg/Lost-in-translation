import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { loginUser } from "../../api/user";
import { storageSave } from "../../utils/storage";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import { STORAGE_KEY_USER } from "../../const/storageKeys";

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
      return <span>Username is required</span>;
    }
    if (errors.username.type === "minLength") {
      return <span>Username is too short (minimum 3 characters)</span>;
    }
  })();

  return (
    <>
      <div className="basis-2/3 flex flex-col justify-center"> 
        <h1>WELCOME!</h1>
        <h2>What's your name?</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
            {/* <label htmlFor="username">Username: </label> */}
            <input
              type="text"
              placeholder="Johndoe"
              {...register("username", usernameConfig)}
            />
            {errorMessage}
          </fieldset>
          <button type="submit" disabled={loading}>
            Continue
          </button>

          {loading && <p>Logging in...</p>}
          {apiError && <p>{apiError}</p>}
        </form>
      </div>
    </>
  );
};
export default LoginForm;
