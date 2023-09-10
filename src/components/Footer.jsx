import { NavLink } from "react-router-dom"
export default function Footer() {
    const year = new Date().getFullYear()
    const  activeStyles  = {
        color : "#D87D4A",
   }

    return(
        <footer className="bg-footerbg mt-auto">
            <section className="flex w-[90%]  lg:max-w-[80%] md:max-w-[85%] items-center justify-center flex-col gap-8 py-6 relative md:items-start md:mx-auto">
                <div className="h-[8px] w-[100px] bg-lightorange absolute top-0 "></div>
                <NavLink to= "/" className= "mt-12"><img   src="../images/shared/desktop/logo.svg" alt="" /></NavLink>
                
                <nav className="text-customwhite  gap-6  flex flex-col items-center md:flex-row flex-wrap lg:absolute lg:top-28 lg:left-[65%]">
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
                <p className="text-textlight md:text-left md:px-0 text-center px-6 max-w-[50ch]">
                    Audiophile is an all in one stop to fullfill your audio needs we're small team of music lovers and sound specialists who are devoted to helping you get most out of personal audio.Come and visit our demo facility - we're open 7 days a week                    
                </p>
                <ul className="flex gap-4 lg:absolute lg:top-56 lg:left-[75%]">
                    <li className="hover:scale-150 transition-transform delay-100"><img src="../images/shared/desktop/icon-facebook.svg" alt="" /></li>
                    <li className="hover:scale-150 transition-transform delay-100" ><img src="../images/shared/desktop/icon-twitter.svg" alt="" /></li>
                    <li className="hover:scale-150 transition-transform delay-100"><img src="../images/shared/desktop/icon-instagram.svg" alt="" /></li>
                </ul>
                <p className="text-textlight">Copyright {year} All Rights Reserved</p>
            </section>
        </footer>
    )

}