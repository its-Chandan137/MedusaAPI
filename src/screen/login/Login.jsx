import React, { useState } from 'react'
import { Title } from '../../components/common/CustomComponents';
import { useNavigate } from 'react-router-dom'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { loginData } from '../../assets/data/data';
import { useDispatch } from 'react-redux';
import { AccountAction } from '../../redux/slice/accountSlice';


export const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [open,setOpen] = useState(false)

    const [email,setEmail] = useState("")
    const [emailError, setEmailError] = useState(false)


    const [password,setPassword] = useState("")
    const [passwordError,setPasswordError] = useState(false)

    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    const toggle = () =>{
        setOpen(!open)
    }



    const handleEmail = (e)=>{
        const email = e.target.value
        if(!email.match(emailRegex))
        {
            setEmailError(true)
        }
        else
        {
            setEmailError(false)
        }
        setEmail(email)
    }
    const handlePassword = (e)=>{
        const password = e.target.value
        if(password == "")
        {
            setPasswordError(true)
        }
        else
        {
            setPasswordError(false)
        }
        setPassword(password)
    }

    const LoggedIn = () =>{
        dispatch(AccountAction.loggedin(true))
      }

    const handleSubmit = (e)=>{
        e.preventDefault();
        const password = e.target[1].value
        const email = e.target[0].value
        
        if((loginData.find((x)=> (x.email === email && x.password === password))))
        {
            alert(`Welcome ${email}`)
            LoggedIn()
            navigate("/home")
        }
        else{
            alert(`Error`)
            setEmailError(true)
        }


        if(!email.match(emailRegex))
        {
            setEmailError(true)
        }
        else
        {
            setEmailError(false)
        }



        if(password == "")
        {
            setPasswordError(true)
        }
        else
        {
            setPasswordError(false)
        }

        if((email.match(emailRegex)) && (password!=""))
        {
            // alert("Welcome")
        }
    }
  return (
        <form onSubmit={handleSubmit} className="backgroundScreens w-full h-full mt-24 pt-10 bg-primary flex justify-center items-center pb-80" noValidate>
            <div className='w-[300px]'>
            <div className="flex items-center justify-center ">
                <h1 className="text-blue-600 text-[80px] font-[600]">LogIn</h1>
            </div>
            <div className="mb-5">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your email</label>
                <input onChange={handleEmail} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="little@demon.com" required />

                {emailError? <p className="mt-2 text-sm text-red-600 dark:text-red-500"> Email Error!</p> : ""}

            </div>
            <div className="mb-5 relative">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Your password</label>
                <input onChange={handlePassword} type={!open? "password" : "text"} id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>

                <div className='absolute top-10 right-2 text-white'>
                    {open? <FaEye onClick={toggle}/> : <FaEyeSlash  onClick={toggle}/>}
                </div>

                {passwordError? <p className="mt-2 text-sm text-red-600 dark:text-red-500"> Password Error!</p> : ""}

            </div>
            <div className="flex items-start mb-5">
                <div className="flex items-center h-5">
                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                </div>
                <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-white">New to the app ? <a onClick={()=>navigate("/Register")}  className="text-blue-600 hover:underline dark:text-blue-500"> Register</a></label>
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </div>
        </form>
  )
}