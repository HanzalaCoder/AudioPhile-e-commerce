import { NavLink } from "react-router-dom"

export default function NavText() {
    const  activeStyles  = {
        color : "#D87D4A",
   }


    return(
        <nav className="text-customwhite  gap-4 lg:gap-10 md:text-md hidden md:flex mx-auto  font-semibold">
        <NavLink to="."
        style={({isActive})=> isActive ? activeStyles : null }>

            HOME
        </NavLink>
        <NavLink to="headphones" 
          style={({isActive})=> isActive ? activeStyles : null } >
            HEADPHONES
        </NavLink>
        <NavLink to="speakers" 
         style={({isActive})=> isActive ? activeStyles : null } >
            SPEAKERS
        </NavLink>
        <NavLink to="earphones"
         style={({isActive})=> isActive ? activeStyles : null } >
           EARPHONES
        </NavLink>
    </nav>
    )
}