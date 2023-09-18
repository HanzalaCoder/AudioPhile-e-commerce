import {Link } from 'react-router-dom';
import { useContext,useEffect, useState } from 'react';
import {stateContext}  from "../components/LayoutPages"
import {cartTotal}  from "../components/LayoutPages"

export default function Cart({data}) {
    function updatePrice(e) {
        calculateTotal()
        const Total = document.querySelector(".total")
        const id = parseInt(e.target.parentElement.parentElement.classList[1]);
        const operation = e.target.textContent;
        const countElement = e.target.parentElement.querySelector(".item-count");
        const orignalprice = parseInt(data[id-1].price)
        let newCount = parseInt(countElement.textContent);
    
        if (operation === "+") {
          newCount += 1;
        } else if (operation === "-") {
          newCount -= 1;
        }
      
        if (newCount < 1) {
            setArrayData(prevData => {
                const newArray = prevData.filter(item => {
                    if (id !==  item.id) {
                        return item
                    }

                })
                localStorage.setItem("cart",JSON.stringify(newArray))
                return newArray
            })
            Total.textContent = "$ 0"
            return
        }
        setArrayData((prevData) => {
          const newArray = prevData.map((singleArray) => {
            if (id === singleArray.id) {
    
              return {
                ...singleArray,
                count:  newCount,
                price : orignalprice * newCount
              };
            }

            return singleArray;
          });
          localStorage.setItem("cart",JSON.stringify(newArray))
          return newArray
        });
        calculateCount()
       
    }
    function removeAll() {
        const Total = document.querySelector(".total")
        const cartTotal = document.querySelector(".cartTotal")
        const cartText = document.querySelector(".cartText")
        const button = document.querySelector(".checkout")
        localStorage.removeItem("cart");
        Total.textContent = "$0"
        cartTotal.textContent = "0"
        cartTotal.classList.add("hidden")
        button.disabled = true
        cartText.textContent = `(${0})`
        setArrayData([])
        
    }
    function  calculateTotal() {
        let totalnum = 0
        arraydata.map(item  => {
            totalnum += item.price
        })
        setTotal(totalnum)
    }
    function calculateCount() {
        let totalcart = 0
        arraydata.forEach(item => {
            totalcart += item.count
        })
        dispatch({type : "total",payload: {value : totalcart}})
    }
    function toggleCart() {
        const cart = document.querySelector(".cart")
        const overlay = document.getElementById("overlay")
        cart.classList.add("h-0")
        cart.classList.remove("h-fit")
        overlay.classList.add("hidden")
    }
    const [arraydata, setArrayData] = useContext(stateContext)
    const [cartTotalstate,dispatch] = useContext(cartTotal)
    const [total , setTotal] = useState(0)
    const cartTotalelement = document.querySelector(".cartTotal");
    if (cartTotalstate.count > 0) {
        cartTotalelement.classList.remove("hidden")
    }
    let items  = []
    if(arraydata) {
      items =  arraydata.map(item => {
            return (
                <div key={item.id} className={`flex ${item.id}  items-center sm:gap-4`}>
                    <img className="w-[80px]" src={item.img} alt="" />
                    <div>
                        <p className="text-customblack font-semibold break-words text-lg max-w-[12ch]">{item.name}</p>
                        <span className="text-customtext font-semibold price ">${item.price}</span>
                    </div>
                    <div className="flex justify-between w-[60px] sm:w-[80px] py-2 bg-neutral-200 px-2 ml-auto">
                        <span className="cursor-pointer" onClick={updatePrice}>-</span>
                        <span className="item-count">{item.count}</span>
                        <span className="cursor-pointer"  onClick={updatePrice}>+</span>
                    </div>
                </div>
            )
        })
    }
    useEffect(()=> {
        calculateCount()
        calculateTotal()
    },[arraydata])
    
    return(
        <section className=" cart h-0 flex  overflow-hidden absolute top-28 right-0 w-[90vw]  sm:w-[420px] shadow-2xl z-50  bg-almostwhite rounded-lg flex-col gap-6">
            <div className="flex justify-between items-center px-6 mt-6">
                <h1 className="font-bold text-customblack text-xl" >CART <span className="cartText" >({cartTotalstate.count})</span></h1>
                <button className="text-customtext font-semibold underline hover:no-underline " onClick={removeAll} >Remove all</button>
            </div>
            <div className="cartContainer flex flex-col  px-2 sm:px-4" >
                {items}
            </div>
            <div className="flex justify-between text-customtext font-semibold px-6">
                <h3>TOTAL</h3>
                <h3 className="total" >$ {total}</h3>
            </div>
            <Link  className='w-[90%] mx-auto' onClick={toggleCart} to="/Checkout">
                <button className="bg-darkorange checkout w-[100%]  px-6  mx-auto  py-3   m-6 text-customwhite font-semibold rounded-md hover:bg-lightorange disabled:bg-lightorange" 
                 disabled= {true} > CHECKOUT </button>

            </Link>
        </section>
    )
}