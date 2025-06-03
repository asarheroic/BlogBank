
const AvForAp = ({name} : {name : string}) => {
    return (
      <div>
        
  <div className=" p-3 not-first-of-type:relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
      <span className="font-small text-gray-600 dark:text-gray-300">{ name[0].toUpperCase()}</span>
  </div>
  
      </div>
    )
  }

export default AvForAp

