import React, { useEffect, useRef } from "react";
import { CustomNavLink, Title } from "../../components/common/CustomComponents";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AccountAction } from "../../redux/slice/accountSlice";

export const Register = () => {
  const ref = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch()

  // const [passStore,setPassStore] = useState("")
  // const [confirmPass,setConfirmPass] = useState("")

  // /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i

  const [colF, setColF] = useState("grey");
  const [colT, setColT] = useState("grey");

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const [confirmPass, setConfirmPass] = useState("");
  const [confPassError, setConfPassError] = useState(false);

  const [saveData, updateSaveData] = useState()

  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const handleName = (e) => {
    const name = e.target.value;
    if (name.length < 3) {
      setNameError(true);
      setColT("red");
    } else {
      setNameError(false);
      setColT("grey");
    }
    setName(name);
  };
  const handleEmail = (e) => {
    const email = e.target.value;
    if (!email.match(emailRegex)) {
      setEmailError(true);
      setColT("red");
    } else {
      setEmailError(false);
      setColT("grey");
    }
    setEmail(email);
  };
  const handlePassword = (e) => {
    const password = e.target.value;
    if (password == "") {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
    setPassword(password);
  };
  const handleConfPassword = (e) => {
    const Cpassword = e.target.value;
    setConfirmPass(Cpassword);
    if (confirmPass == password) {
      setConfPassError(true);
    } else {
      setConfPassError(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target[0].value;
  
    if (name.length < 3) {
      setNameError(true);
      setColT("red");
    } else {
      setNameError(false);
      setColT("grey");
    }
    const email = e.target[1].value;
    if (!email.match(emailRegex)) {
      setEmailError(true);
      setColT("red");
    } else {
      setEmailError(false);
      setColT("grey");
    }
    const password = e.target[2].value;
    if (password === "") {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
    const Cpassword = e.target[3].value;
    if (confirmPass === password) {
      setConfPassError(false);
    } else {
      setConfPassError(true);
    }
  
    if (
      name.length >= 3 &&
      email.match(emailRegex) &&
      password != "" &&
      password === confirmPass
    ) {
      alert("Submitted");
      navigate("/login");
      addAccount();
    }
  };
  

  const addAccount = () => {
    dispatch(AccountAction.addAccount(
      {
        name : name,
        email : email,
        password : password,
      }))


  }

  return (
    <form onSubmit={handleSubmit} className="backgroundScreens w-full h-full mt-24 pt-10 bg-primary flex justify-center items-center pb-36" noValidate>
      <div className="w-[300px]">
        <div className="flex items-center justify-center">
            <h2 className=" text-blue-500 text-[80px] font-[600]">Register</h2>
        </div>
        <div className="mb-5">
          <label
            htmlFor="username-success"
            className={`block mb-2 text-sm font-medium text-white`}
          >
            Your name
          </label>

          <input
            onChange={handleName}
            defaultValue={name}
            type="text"
            id="username-success"
            className={`bg-${colT}-50 border border-${colT}-500 text-white placeholder-grey-700 dark:placeholder-grey-500 text-sm rounded-lg focus:ring-${colT}-500 focus:border-${colT}-500 block w-full p-2.5 dark:bg-gray-700 dark:border-${colT}-500`}
            placeholder="Little Demon..."
            required
          />

          {nameError ? (
            <p className="mt-2 text-sm text-red-600 dark:text-red-500">
              {" "}
              User name required!
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className={`block mb-2 text-sm font-medium text-white dark:text-${colT}`}
          >
            Your email
          </label>

          <input
            onChange={handleEmail}
            type="email"
            id="email"
            className={`shadow-sm bg-${colT}-50 border border-${colT}-300 text-${colT}-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-${colT}-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"`}
            placeholder="little@demon.com"
            required
          />

          {emailError ? (
            <p className="mt-2 text-sm text-red-600 dark:text-red-500">
              <span className="font-medium"></span> Email required!
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-white"
          >
            Your password
          </label>

          <input
            onChange={handlePassword}
            type="password"
            id="password"
            className="shadow-sm bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />

          {passwordError ? (
            <p className="mt-2 text-sm text-red-600 dark:text-red-500 flex gap-2">
              {" "}
              Password required!
              <div
                className="font-small grid place-content-center pr-[1px] pl-0.5 w-5 h-5 rounded-full bg-blue-700 text-white text-center hover:bg-blue-800 focus:ring-blue-800 i-button"
                data-tooltip="Password length should be minimum 8 characters long, should contain a special character, a number and an uppercase letter"
              >
                !
              </div>
            </p>
          ) : (
            ""
          )}
        </div>

        <div className="mb-5">
          <label
            htmlFor="repeat-password"
            className={`block mb-2 text-sm font-medium text-${colF}-900 dark:text-white`}
          >
            Confirm password
          </label>
          <input
            onChange={handleConfPassword}
            type="password"
            id="repeat-password"
            className={`bg-${colF}-50 border border-${colF}-500 text-white placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-${colF}-500 block w-full p-2.5 dark:text-${colF}-500 dark:placeholder-red-500 dark:border-${colF}-500`}
            required
          />

          {confPassError ? (
            <p className="mt-2 text-sm text-red-600 dark:text-red-500">
              {" "}
              Password doesn't match!
            </p>
          ) : (
            ""
          )}
        </div>

        <div className="flex items-start mb-5">
          <div className="flex items-center h-5">
            <input
              id="terms"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
            />
          </div>
          <label
            htmlFor="terms"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            I agree with the{" "}
            <a
              href="#"
              className="text-blue-600 hover:underline dark:text-blue-500"
            >
              terms and conditions
            </a>
          </label>
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Already logged In ?{" "}
            <a
              onClick={() => navigate("/Login")}
              className="text-blue-600 hover:underline dark:text-blue-500"
            >
              {" "}
              LogIn
            </a>
          </label>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Register new account
        </button>
      </div>
    </form>
  );
};

export default Register;
