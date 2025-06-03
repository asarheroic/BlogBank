
import { useState } from "react"
import Quote from "../components/Quote"
import Heading from "../components/Heading"
import Subheading from "../components/Subheading"
import Button from "../components/Button"
import LabelInput from "../components/LableInput"
import { useNavigate } from "react-router-dom"
// import { BACKEND_URL } from "../config"
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

import axios from "axios"






const Signup = () => {
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")  
    const [password, setPassword] = useState("")


    const sendRequest = async () : Promise<void> => {
        try {
          const response = await axios.post(`${BACKEND_URL}/api/v1/user/signup`,
            {
                name,
                email,
                password
            }
          )
          const jwt = response.data.jwt
          console.log(jwt);
          
          localStorage.setItem("token" , jwt)
          navigate("/blogs")

        } catch (error) {
          console.error("Signup failed:", error);
        }
      }


  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 ">
            <div  className="h-screen flex justify-center flex-col ">
      <div className="flex justify-center">
        <div >
        <div className="px-10">
            <Heading title="Create an account"></Heading>
            <Subheading title="Already have an account" label="Login" to="/signin"></Subheading>


        </div>

        
        <div> 
       <LabelInput type="text" label="Name" placeholder="Tarun" onChange={(e) => {setName((e.target as  HTMLInputElement).value)}}></LabelInput> 
        </div>
       
       <div>
       <LabelInput type="email" label="Email" placeholder="xyz@gmail.com" onChange={(e) => {setEmail((e.target as  HTMLInputElement).value)}}></LabelInput>
       </div>
       
       <div>
       <LabelInput type="password" label="Password" placeholder="" onChange={(e) => {setPassword((e.target as  HTMLInputElement).value)}}></LabelInput>
       </div>
       
       <Button onclick={sendRequest}  label= "Signup" ></Button>
        </div>
        
      </div>
    </div>
        <div className=" hidden lg:block">
        <Quote ></Quote>
        </div>
    </div>
  )
}

export default Signup
