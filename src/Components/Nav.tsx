import { Link, useSearchParams } from 'react-router-dom';

const Nav = () => {

  const [searchParams] = useSearchParams();
  let todos̥Data = searchParams.get("todos");

  return (
    <div className='flex mx-5  text-2xl justify-between mt-5 w-[35%]'>
      <Link to="/" className={`${todos̥Data === null ? "border-b-4 border-blue-700" : ""} "mr-5" `}   > All </Link>
      <Link to="/?todos=active" className={`${todos̥Data === "active" ? "border-b-4 border-blue-700" : ""} "mr-5" `} > Active </Link>
      <Link to="/?todos=completed" className={`${todos̥Data === "completed" ? "border-b-4 border-blue-700" : ""} "mr-5" `} > Completed </Link>
    </div>
  )
}

export default Nav