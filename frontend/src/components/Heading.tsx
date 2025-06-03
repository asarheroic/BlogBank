interface Heading {
    title : string
}

const Heading = ({title} : Heading) => {
  return (
    <div className="text-3xl font-extrabold">
                {title}
            </div>
  )
}

export default Heading