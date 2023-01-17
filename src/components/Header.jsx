import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
export default function Header() {
    const location = useLocation()
    const navigate = useNavigate()
    console.log(location.pathname)
    function pathMatchRoute(route) {
        if (route === location.pathname) {
            return true 
        }
    }
  return (
    <div className='bg-white border-b shadow-sm sticky top-0 z-50'>
        <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
            <div >
               <img alt='' src='real.png'  className='h-20 cursor-pointer' onClick={() => navigate("/")} />
            </div>
            <div>
                <ul className='flex space-x-10'> 
                    <li className={`py-3 text-sm font-semibold cursor-pointer text-gray-400 border-b-4 border-b-transparent  ${pathMatchRoute("/") && "text-black border-b-red-500"}`} onClick={() => navigate("/")} >Home</li>
                    <li className={`py-3 text-sm cursor-pointer font-semibold text-gray-400 border-b-4 border-b-transparent  ${pathMatchRoute("/offers") && "text-black border-b-red-500"}`} onClick={() => navigate("/offers")} >Offers</li>
                    <li className={`py-3 text-sm  cursor-pointer font-semibold text-gray-400 border-b-4 border-b-transparent  ${pathMatchRoute("/sign-in") && "text-black border-b-red-500"}`} onClick={() => navigate("/sign-in")} >Sign In</li>
                </ul>
            </div>
        </header>
    </div>
  )
}