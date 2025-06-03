import { Link } from "react-router-dom"

const HomeAppbar = () => {
  return (
    <div className="border-b-3 bg-slate-200  border-b- border-b-gray-100 flex justify-between px-10 py-4">

        <Link  to ='/' className="font-extrabold text-3xl" >
            BlogBank
            </Link> 
        
        <div className="flex ">
        <Link to = '/signup'>
            <div className=" font-xl  text-sm px-5 py-2.5 text-center me-2 mb-2 hover:text-blue-500 border-l-2  border-l-gray-700">Become a blogger</div>
            </Link>
            <Link to = '/signin'>
            <div className=" font-xl underline text-sm px-5 py-2.5 text-center me-2 mb-2 hover:text-blue-500 border-l-2  border-l-gray-700 ">Login</div>
            </Link>
            <div className="h-5 w-9">
            </div>
        </div>
    </div>
  )
}

export default HomeAppbar
