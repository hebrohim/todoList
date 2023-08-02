

const Form = () => {
  const add = (event:any) =>{
    event.preventDefault()
    console.log(event)
  }
  return (
    <form className="flex flex-col justify-center items-center md:flex-row ">

      <input className="w-full px-3 py-1 border-2 border-slate-800 rounded-md focus:outline-none md:py-2 " />
      <button type="submit" className="w-[40%] mt-3 py-2 bg-slate-700 text-white  rounded-md hover:bg-slate-500 md:w-[20%] md:mt-0 md:ml-3 md:py-3" onClick={(event)=>{add(event)}}>Add Task</button>
    </form>
  )
}

export default Form