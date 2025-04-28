import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInStart,signInFailure,signInSuccess } from "../redux/user/userSlice";
import { useDispatch,useSelector } from "react-redux";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import OAuth from "../components/OAuth";

const SignIn = () => {
  const [formdata, setFormData] = useState({});
  const {loading, error: errorMessage} = useSelector(state => state.user)
  const [isVisible,setIsVisible] = useState(false);
  const [type,setType] = useState('password');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleChange(e) {
    setFormData({ ...formdata, [e.target.id]: e.target.value.trim() });
  }

  const handleToggle = (prev) => {
    setIsVisible(!isVisible);
    if(type==='password'){
 setType("text");
    }
    else{
       setType("password");
    }
   
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formdata.email || !formdata.password) {
      return dispatch(signInFailure("Please fill out all fields."));
    }
    try {
      dispatch(signInStart()); 
      const res = await fetch(
        "https://0kzm7wvu4b.execute-api.ap-south-1.amazonaws.com/api/auth/signin",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formdata),
        }
      );
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
      }
      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate("/");
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };
  return (
    <div className="min-h-screen mt-20">
      <div className=" flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left*/}
        <div className="flex-1">
          <Link to="/" className="font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              Vaibhav's
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5">
            This is a demo project. You can sign in with your email and password
            or with google.
          </p>
        </div>
        {/* right */}
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <Label value="Your email" />
              <TextInput
                type="email"
                placeholder="name@company.com"
                id="email"
                onChange={handleChange}
                className="w-full"
              />
            </div>
            <div>
              <Label value="Your Password" />
              <div className="relative mb-4">
                <TextInput
                  type={type}
                  placeholder="*********"
                  id="password"
                  onChange={handleChange}
                  className="w-full "
                />
                <span onClick={handleToggle} className="cursor-pointer absolute right-3 top-1/2 transform -translate-y-1/2">
                  {isVisible ? <FaRegEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>

            <Button
              gradientDuoTone="purpleToPink"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner size="sm" />
                  <span className="pl-3">Loading...</span>
                </>
              ) : (
                "Sign In"
              )}
            </Button>
            <OAuth />
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Don't Have an account?</span>
            <Link to="/signUp" className="text-blue-500">
              Sign Up
            </Link>
          </div>
          {errorMessage && (
            <Alert className="mt-5" color="failure">
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignIn;
