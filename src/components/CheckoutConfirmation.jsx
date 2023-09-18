import { Link } from "react-router-dom"
import { useContext,useState } from 'react';
import {stateContext}  from "../components/LayoutPages"
const CheckoutConfirmation = ({value}) => {
    const [cartState, setCartState] = useContext(stateContext)
    function resetCart() {
        localStorage.removeItem("cart")
        setCartState([])
    }
  return (
     <div className={`${value} transition-transform delay-500 ease-in bg-customwhite shadow-2xl px-8 py-12 w-[90%] sm:max-w-xl  absolute top-12 left-0 right-0 m-auto flex flex-col gap-8 rounded-2xl`}>
        <div className='bg-darkorange rounded-full w-[80px] h-[80px] grid place-items-center'>
          <i className="fa-solid fa-check  text-5xl text-customwhite"></i>
        </div>
        <h1 className="text-customBlack text-3xl font-semibold uppercase">Thank you for your order</h1>
        <h4 className="text-customtext capitalize font-medium  ">you will recieve an email confimation shortly.</h4>
        <Link to= "/" onClick={resetCart} className="w-full bg-darkorange hover:bg-lightorange py-4 text-center uppercase text-customwhite font-semibold rounded-md">
            back to home
        </Link>
     </div>
  )
}

export default CheckoutConfirmation
