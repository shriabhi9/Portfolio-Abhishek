import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav
        className='w-[100%] flex flex-wrap items-center justify-between first-color text-white md:text-[16px] text-[14px]  pt-4 pb-3 md:px-20 px-10'>
        <Link to={"/"}>
            <button
            className='flex flex-col items-center transition-all duration-300 hover:scale-95 group gap-1 px-4 py-2'>
                <span>@Abhishek</span>
                <div className='h-[4px] w-[4px] rounded-full bg-white scale-0 group-hover:scale-100 transition-all duration-100'/>
            </button>
        </Link>
        <div className='flex gap-8'>
            <Link to={"/work"}>
                <button className='flex flex-col items-center transition-all duration-300 hover:scale-95 group gap-1 px-4 py-2'>
                    <span>Work</span>
                    <div className='h-[4px] w-[4px] rounded-full bg-white scale-0 group-hover:scale-100 transition-all duration-300'/>
                </button>
            </Link>
            <Link to={"/About"}>
                <button className='flex flex-col items-center transition-all duration-300 hover:scale-95 group gap-1 px-4 py-2'>
                   <span>About</span>
                   <div className='h-[4px] w-[4px] rounded-full bg-white scale-0 group-hover:scale-100 transition-all duration-300'/> 
                </button>
            </Link>
            <Link to={"/Connects"}>
                <button className='flex flex-col items-center transition-all duration-300 hover:scale-95 group gap-1 px-4 py-2'>
                    <span>Connects</span>
                    <div className='h-[4px] w-[4px] rounded-full bg-white scale-0 group-hover:scale-100 transition-all duration-300'/> 
                </button>
            </Link>
        </div>
    </nav>
  )
}
