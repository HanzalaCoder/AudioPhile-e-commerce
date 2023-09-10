import { Link, NavLink } from "react-router-dom"
import { useState } from "react"
import NavText from "./NavText"
import Cart from "./Cart"

export default function Header({data}) {
    const [menu,setMenu] = useState(true)
    const [cartToggle, setCartToggle] = useState(false)


    function toggleMenu(e) {
        setMenu(prev=> !prev)
        const close = e.target.parentElement.querySelector(".close")
        const open = e.target.parentElement.querySelector(".open")
        const navbar = document.querySelector(".navbar")
        const overlay = document.getElementById("overlay2")
      
        if(menu) {
            open.classList.add("hidden")
            close.classList.remove("hidden")
            navbar.classList.add("h-fit")
            navbar.classList.remove("overflow-hidden","h-0")
            overlay.classList.remove("hidden")
        } else if (!menu ) {
            open.classList.remove("hidden")
            close.classList.add("hidden")
            navbar.classList.add("overflow-hidden","h-0")
            navbar.classList.remove("h-fit")
            overlay.classList.add("hidden")
        } 
    }

    function clickHide() {
        setMenu(prev=> !prev)
        const close = document.querySelector(".close")
        const open = document.querySelector(".open")
        const navbar = document.querySelector(".navbar")
        const overlay = document.getElementById("overlay2")
        open.classList.remove("hidden")
        close.classList.add("hidden")
        navbar.classList.add("overflow-hidden")
        navbar.classList.add("h-0")
        navbar.classList.remove("h-fit")
        overlay.classList.add("hidden")

    }

    function toggleCart() {
        setCartToggle(prev => !prev)
        const cart = document.querySelector(".cart")
        const overlay = document.getElementById("overlay")
        if(cartToggle) {
            cart.classList.add("h-0")
            cart.classList.remove("h-fit")
            overlay.classList.add("hidden")
        } else if (!cartToggle) {
            cart.classList.remove("h-0")
            cart.classList.add("h-fit")
            overlay.classList.remove("hidden")

        }
    }


    return(
        <header className="bg-almostBlack pb-4 pt-4 z-50" >
            <section className=" flex items-center mx-auto w-[90%] py-6 md:max-w-[80%]">
            <div className="mr-6 md:hidden z-40 shadow-xl">
                <img className="open " onClick={toggleMenu} src= "../images/shared/tablet/icon-hamburger.svg"alt="" />
                <i className="fa-solid fa-x close hidden text-[#e8e8e8] text-xl" onClick={toggleMenu} ></i>
            </div>
            <NavLink to="/" className= "z-50"> <img src="../images/shared/desktop/logo.svg"  alt="" /></NavLink>
            <NavText />
            <div id="overlay" className="fixed inset-0 bg-black opacity-60 z-40 hidden"></div>
            <div id="overlay2" className="fixed inset-0 bg-black opacity-70 z-30 hidden "></div>
            <div className="ml-auto relative cursor-pointer z-50 ">
                <img onClick={toggleCart}  src="../images/shared/desktop/icon-cart.svg" alt="" />
                <div className=" cartTotal  hidden bg-darkorange  text-customwhite rounded-full grid place-items-center absolute w-[20px] -top-5 -right-2" ></div>
                <Cart data = {data} />
            </div>
           
            
            </section>

            <section className=" navbar absolute top-20 px-20 sm:px-4 bg-neutral-200  h-0 overflow-hidden z-40 right-0 left-0 md:hidden mx-auto mt-8 shadow-2xl">
                <nav className="grid grid-cols-1 sm:grid-cols-3 place-items-center sm:place-content-start py-20 gap-24 sm:gap-4 w-full">
                     <Link to="headphones" className=" w-[350px] sm:w-[200px]   h-[180px]  bg-zinc-300/50 rounded-lg  shadow-lg  grid place-items-center relative " onClick={clickHide} >
                        <img className="absolute -top-[40%] sm:-top-[20%]     w-[55%] sm:w-[70%] hover:scale-110 transition-transform delay-100" src="../images/shared/mobile/desktop1.png" alt="" />
                         <h2 className="font-bold text-xl self-end mt-20 ">HEADPHONES</h2>
                         <div className="flex items-center gap-3">
                            <span className="text-customtext font-bold hover:text-lightorange" >SHOP</span>
                            <img src="../images/shared/desktop/icon-arrow-right.svg" alt="arrow " /> 
                         </div>
                    </Link>
                    
                     <Link to="speakers" className=" w-[350px] sm:w-[200px]  h-[180px]  bg-zinc-300/50 rounded-lg  shadow-lg  grid place-items-center relative" onClick={clickHide}>
                        <img className="absolute -top-[40%] sm:-top-[20%]   w-[55%] sm:w-[70%] hover:scale-110 transition-transform delay-100" src="../images/shared/mobile/desktop2.png
                        " alt="" />
                         <h2 className="font-bold text-xl self-end mt-20">SPEAKERS</h2>
                         <div className="flex items-center gap-3">
                            <span className="text-customtext font-bold hover:text-lightorange" >SHOP</span>
                            <img src="../images/shared/desktop/icon-arrow-right.svg" alt="arrow " /> 
                         </div>
                    </Link>
                    
                     <Link to="earphones" className=" w-[350px] sm:w-[200px]  h-[180px]   bg-zinc-300/50 rounded-lg  shadow-lg  grid place-items-center relative " onClick={clickHide}>
                        <img className="absolute -top-[40%] sm:-top-[15%] w-[55%] sm:w-[70%] hover:scale-110 transition-transform delay-100" src="../images/shared/mobile/desktop3.png
                        " alt="" />
                         <h2 className="font-bold text-xl self-end mt-20">EARPHONES</h2>
                         <div className="flex items-center gap-3">
                            <span className="text-customtext font-bold hover:text-lightorange" >SHOP</span>
                            <img src="../images/shared/desktop/icon-arrow-right.svg" alt="arrow " /> 
                         </div>
                    </Link>
                </nav>
            </section>
           
        </header>
    )

}