import logo from "../assets/image/logo.png"

const Navbar = () => {
  return (
   <>
   <div className=" relative bg-indigo-700 mx-auto border-b text-white border-indigo-700">
     <div className="flex items-center justify-between">
      <div className="pt-2 flex  flex-shrink-0 items-center"><img className="h-9 w-auto" src={logo} alt="logo" /><span>react job</span></div>
      <div className="flex space-x-6">
        <a href="" className="hover:underline">home</a>
        <a href=""className="hover:underline">find job</a>
        <a href=""className="hover:underline">add job</a>
      </div>
      <button className="px-5 pt-2 pb-2 rounded-full mt-2 mb-2 bg-red-500 hover:underline" >get started</button>
    </div>
   </div>
   </>
  )
}

export default Navbar
