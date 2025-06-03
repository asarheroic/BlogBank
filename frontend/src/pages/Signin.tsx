
import { useState } from "react"
import Quote from "../components/Quote"
import Heading from "../components/Heading"
import Subheading from "../components/Subheading"
import Button from "../components/Button"
import LabelInput from "../components/LableInput"
import { useNavigate } from "react-router-dom"
import axios from "axios"
// import { BACKEND_URL } from "../config"
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;










const Signin = () => {

    const navigate= useNavigate()
    const [email, setEmail] = useState("")  
    const [password, setPassword] = useState("")

    const sendRequest = async () : Promise<void> => {
      try {
        const response = await axios.post(`${BACKEND_URL}/api/v1/user/signin`,
          {
              
              email,
              password
          }
        )
        
        const jwt = response.data.jwt 
        localStorage.setItem("token" , jwt)
        navigate("/blogs")

      } catch (error) {
        console.error("Login failed:", error);
      }
    }

    

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 ">
            <div  className="h-screen flex justify-center flex-col ">
      <div className="flex justify-center">
        <div >
        <div className="px-10">
            <Heading title="Welcome back"></Heading>
            <Subheading title="Don't have an account" label="Signup" to="/signup"></Subheading>


        </div>

        
       
       
       <div>
       <LabelInput type="email" label="Email" placeholder="xyz@gmail.com" onChange={(e) => {setEmail((e.target as  HTMLInputElement).value)}}></LabelInput>
       </div>
       
       <div>
       <LabelInput type="password" label="Password" placeholder="" onChange={(e) => {setPassword((e.target as  HTMLInputElement).value)}}></LabelInput>
       </div>
       
       <Button onclick={sendRequest} label= "Login" ></Button>
        </div>
        
      </div>
    </div>
        <div className=" hidden lg:block">
        <Quote ></Quote>
        </div>
    </div>
  )
}

export default Signin



