import { Link } from "react-router-dom"
import AvForAp from "./AvForAp"

const Appbar = () => {
  return (
    <div className="border-b-3  border-b- border-b-gray-100 flex justify-between px-10 py-4">

        <Link  to ='/blogs' className="font-extrabold text-2xl" >
            BlogBank
            </Link> 
        
        <div className="flex ">
            <Link to = '/publish'>
            <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ">New</button>
            </Link>
            <div className="h-5 w-9">
            <AvForAp name = "tarun"/>
            </div>
        </div>
    </div>
  )
}

export default Appbar
