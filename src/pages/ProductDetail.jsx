import { useParams } from "react-router-dom"
import { useState,useContext } from "react"
import { Link } from "react-router-dom"
import Catagaries from "../components/Catagaries"
import TextCard from "../components/TextCard"
import {stateContext}  from "../components/LayoutPages"
export default function ProductDetail({data}) {
    const [array, setArray] = useContext(stateContext)
    const [amount,setAmount] = useState(1)
    const parm = useParams()
    const id = parm.id2

    let produtsData = data.filter(cardinfo => {
       if (cardinfo.slug === id) {
            return cardinfo
       }
    }) 
    produtsData = produtsData[0]


    function addAmount() {
        setAmount(amount => amount + 1)

    }
    function removeAmount() {
        if (amount > 1) {
            setAmount(amount => amount - 1)
        } else if (amount <= 1) {
            setAmount(1)
        }
    }
    function sendItemtoCart() {
        let dataarray  = {}
        const done = document.querySelector(".done")
        done.classList.remove("scale-0")
        done.classList.add("scale-100")
        setTimeout(()=> {
            done.classList.remove("scale-100")
            done.classList.add("scale-0")
        },1000)
 
        const id = parseInt(produtsData.id)
        const img = produtsData.cartImage;
        const name = produtsData.name;
        let price = parseInt(produtsData.price);
        let cartImg = produtsData.cartImage
        const cartTotalel = document.querySelector(".cartTotal"); 
        const button = document.querySelector(".checkout")
        dataarray = {
            id,
            img,
            name,
            price: price * amount,
            count: amount,
            cartImg,
        }
        let itemAlreadyExists = false
        let updatedArray = []
        if (array) {
            updatedArray = array.map(singleArray => {
                if (singleArray.id === id) {
                    itemAlreadyExists = true;
                    return {
                        ...singleArray,
                        price: singleArray.price + price * amount,
                        count: singleArray.count + amount
                    };
                }
                return singleArray;
            });
        }
        cartTotalel.classList.remove("hidden");
        button.disabled = false;
        setAmount(1)
        if (itemAlreadyExists) {
            localStorage.setItem("cart",JSON.stringify(updatedArray))
            setArray(updatedArray);
            return;
        }
        setArray(prev => {
            const newArray = [
                ...prev,
                dataarray
            ]
            localStorage.setItem("cart",JSON.stringify(newArray))
            return newArray
        })
       
    } 
    
    return (
        <>
         <section className="card w-[90%] mx-auto md:max-w-[80%]  flex flex-col items-center" >
            <Link to= ".." relative="path" className="text-customtext self-start my-[4rem]" >Go Back</Link>
            <section className="flex flex-col gap-5 md:flex-row md:justify-between w-full lg:gap-20 xl:gap-36" >
                    <div className=" md:w-[50%] mb-8 w-[90%] self-cente ">
                        <img className="md:hidden hover:scale-105 transition-transform delay-200" src={produtsData.image.mobile} alt="" />
                        <img className="hidden md:block lg:hidden hover:scale-105 transition-transform delay-200" src={produtsData.image.tablet} alt="" />
                        <img className = "hidden lg:block hover:scale-105 transition-transform delay-200 "src={produtsData.image.desktop} alt="" />
                    </div>

                    <div className="flex flex-col items-start gap-4 md:w-[50%] md:self-center">
                            {produtsData.new ? (<h1 className="tracking-[.6em] text-lightorange">
                                        NEW PRODUCT</h1>
                                    ) : null}
                                <h1 className="text-3xl font-bold uppercase tracking-[.1em] md:text-[3.5rem]  leading-[3.5rem]">
                                    {produtsData.name}
                                </h1>
                                <p className="text-customtext font-normal max-w-[45ch]">{produtsData.description} </p>
                                <h3 className="text-almostBlack font-bold tracking-widest text-lg">$ {produtsData.price}</h3>
                                <div className="flex items-center gap-6 mb-8">
                                    <div className="flex justify-between w-[120px] py-4 bg-neutral-200 px-4">
                                        <span onClick={removeAmount} className="cursor-pointer" >-</span>
                                        <span className="amount">{amount}</span>
                                        <span onClick={addAmount} className="cursor-pointer" >+</span>
                                    </div>
                                    <button className="w-[180px] py-4 text-customwhite font-semibold bg-darkorange hover:bg-lightorange" onClick={sendItemtoCart}>ADD TO CART</button>
                                </div>
                    </div>
             </section>
                <div className="flex flex-col lg:gap-24 my-[4rem] lg:flex-row xl:gap-36 ">
                    <div className="lg:w-[70%]">
                        <h1 className="text-customblack font-extrabold mt-8 text-3xl lowercase">FEATURES</h1>
                        <p className="text-customtext py-4">
                                {produtsData.features.split('\n').map((item, key) => {
                                    return (
                                    <span key={key}>
                                        {item}
                                        <br />
                                    </span>
                                    );
                                })}
                        </p>
                    </div>
                    <ul className="text-customtext grid gap-2 lg:gap-4 lg:w-[30%] lg:self-center">
                        <h1 className="text-almostBlack font-bold text-2xl mb-4">IN THE BOX</h1>
                        {produtsData.includedItems.map((items,index) => {
                           return <li key={index}><span className="text-lightorange font-semibold mr-6">{items.quantity}x</span> <span className="font-bold">{items.item}</span> </li>

                        })}

                    </ul>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 rounded-lg">
                    <div className="md:row-span-2 rounded-lg">
                        <img className="w-full md:hidden" src={produtsData.gallery.first.mobile} alt="" />
                        <img className="w-full hidden md:block lg:hidden" src={produtsData.gallery.first.tablet} alt="" />
                        <img className="w-full hidden lg:block" src={produtsData.gallery.first.desktop} alt="" />
                    </div>
                    <div className="md:col-start-2 md:row-start-1 rounded-lg">
                        <img className="w-full md:hidden" src={produtsData.gallery.second.mobile} alt="" />
                        <img className="w-full hidden md:block lg:hidden" src={produtsData.gallery.second.tablet} alt="" />
                        <img className="w-full hidden lg:block" src={produtsData.gallery.second.desktop} alt="" />
                    </div>
                    <div className="md:col-span-2 rounded-lg">
                        <img className="w-full md:hidden" src={produtsData.gallery.third.mobile} alt="" />
                        <img className=" hidden md:block lg:hidden" src={produtsData.gallery.third.tablet} alt="" />
                        <img className=" w-full hidden lg:block" src={produtsData.gallery.third.desktop} alt="" />
                    </div>
                </div>
              
                <section className="flex flex-col items-center md:flex-row md:gap-10 mt-[6rem]">
                    {produtsData.others.map((item,index) =>{
                        return <div key={index} className="flex flex-col items-center gap-6 mb-[4rem]">
                            <div>
                                <img className="md:hidden hover:scale-105 transition-transform delay-200" src={item.image.mobile} alt="" />
                                <img className="hidden md:block lg:hidden hover:scale-105 transition-transform delay-200 " src={item.image.tablet} alt="" />
                                <img className="hidden lg:block hover:scale-105 transition-transform delay-200" src={item.image.desktop} alt="" />
                            </div>
                             <h1 className="text-2xl lg:text-3xl text-almostBlack font-medium tracking-[.1em]">{item.name}</h1>
                             <Link to={`/${item.slug}`} >
                                <button className="w-[180px] py-4 bg-darkorange hover:bg-lightorange text-customwhite uppercase rounded-sm">
                                                        See product
                                        </button>
                            </Link>
                        </div> 
                    })}
                </section>
        </section>
        <Catagaries />
        <TextCard />
        <div className="done flex scale-0 bg-neutral-400 py-3 w-[350px] absolute right-0 left-0 lg:top-40    m-auto px-4 rounded-xl justify-between items-center transition-transform delay-100 ease-in-out">
            <h1 className="text-almostBlack font-semibold capitalize">Item Added to cart Successfully!</h1>
            <i className ="fa-solid fa-check text-3xl text-[#24d659] " ></i>
        </div>
        </>
    )
}