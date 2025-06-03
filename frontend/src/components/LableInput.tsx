import type { ChangeEvent } from "react"

interface LabelInput{
  label : string,
  placeholder : string ,
  onChange : (e : ChangeEvent) => void,
  type? : string
}


const LabelInput = ({label , placeholder , onChange, type} : LabelInput) => {
  return (
    <div className="grid gap-6 mb-6 md:grid-cols-1">
        <div>
            <label className="block mb-2 text-sm font-medium  ">{label}</label>
            <input type={type || "text"} onChange = {onChange} className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder ={placeholder} required />
        </div>
        </div>
  )
}

export default LabelInput
