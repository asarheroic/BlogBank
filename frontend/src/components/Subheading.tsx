import { Link } from "react-router-dom"

interface Subheading {
    title : string,
    to : string,
    label : string
}


const Subheading = ({title ,to , label} : Subheading) => {
  return (
    <div className="text-slate-400 text-center">
    {title}
        <Link className="font-semibold underline" to = {to}>{label }</Link>
    </div>
  )
}

export default Subheading
