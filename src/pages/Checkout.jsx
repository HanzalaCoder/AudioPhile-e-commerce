import { useContext,useState } from 'react';
import {stateContext}  from "../components/LayoutPages"
import Input from '../components/Input';
export default function Checkout() {
    const [dataArray, setDataArray] = useContext(stateContext)
    const [buttonActive,setButtonActive] = useState(true)
    const [formState,setFormStata] = useState({
        name  : "",
        email : "",
        phone: "",
        address: "",
        zip :"",
        city : "",
        country : "",
        emoneynumber: "",
        emoneypin: "",
        payment : "emoney",
     })
    function handleFormChange(event) {
        const {name,value,type,checked} = event.target
        setFormStata(prev => {
            return {
                ...prev,
                [name] : type === "checkbox" ? checked : value
            }
        })
        /* should i validate inputs here after the form state updates if no than where  */
        setButtonActive(false)
    }
    let total = 0
    let ShippingFee = 100
    countTotal()
    let items = dataArray.map(item => {
        return (
            <div key={item.id} className="flex items-center gap-4">
                <img className="w-[80px] rounded-lg" src={item.cartImg} alt="" />
                <div className="flex flex-col gap-2">
                    <h2 className="font-semibold text-lg text-customblack break-words break-before-avoid whitespace-pre-wrap">{item.name}</h2>
                    <span className="font-semibold text-customtext">${item.price}</span>
                </div>
                <h4 className="font-semibold text-customtext ml-auto">X{item.count}</h4>
            </div>
        )
    })
    function countTotal() {
        dataArray.map(item  => {
            total += item.price
        })
    }
    function foamAction(e) {
        e.preventDefault()
        console.log("submited")
    }
    return (
        <section className='bg-neutral-200/50'>
        <form>
            <section className=" py-20 flex flex-col gap-8 max-lg:gap-4 lg:flex-row lg:w-[90%] lg:mx-auto lg:justify-center ">
                <div className=' bg-customwhite shadow-2xl w-[90vw] md:w-[80vw] lg:w-[60%] lg:mx-0     py-10 px-6 mx-auto rounded-xl '>
                    <h1 className='text-2xl font-semibold uppercase'>Checkout</h1>
                    <section  className='flex flex-col gap-2 mt-4'>
                        <h3 className='uppercase text-darkorange'>Biling Details </h3>
                        <section className='grid grid-cols-1 gap-4 mt-8 md:grid-cols-2'>
                            <Input
                                type="text"
                                placeholder="Hanzala Khan"
                                handleFormChange= {handleFormChange}
                                value={formState.name}
                                name = "name"
                                error="Name Can't be Empty"
                                spread = "col-span-1"
                            />
                            <Input
                                type="email"
                                placeholder="hanzala@outlook.gmail.com"
                                handleFormChange= {handleFormChange}
                                value={formState.email}
                                name = "email"
                                error="Enter valid Email"
                                spread = "col-span-1"
                            />
                            <Input
                                type="text"
                                placeholder="+923125454547"
                                handleFormChange= {handleFormChange}
                                value={formState.phone}
                                name = "phone"
                                error="enter valid phone number"
                                spread = "col-span-1"
                            />
                       </section>
                    </section>
                    <section  className='flex flex-col gap-2 mt-8'>
                        <h3 className='uppercase text-darkorange'>Shipping Details</h3>
                        <section className='grid grid-cols-1 gap-4 mt-8 md:grid-cols-2'>
                            <Input
                                type="text"
                                placeholder="5th street manhantan"
                                handleFormChange= {handleFormChange}
                                value={formState.address}
                                name = "address"
                                error="address Can't be Empty"
                                spread = "md:col-span-2"
                            />
                            <Input
                                type="text"
                                placeholder="7870"
                                handleFormChange= {handleFormChange}
                                value={formState.zip}
                                name = "zip"
                                error="Enter valid zip code"
                                spread = ""
                            />
                            <Input
                                type="text"
                                placeholder="manhatan New York"
                                handleFormChange= {handleFormChange}
                                value={formState.city}
                                name = "city"
                                error="enter city name"
                                spread = ""
                            />
                            <Input
                                type="text"
                                placeholder="USA"
                                handleFormChange= {handleFormChange}
                                value={formState.country}
                                name = "country"
                                error="enter country name"
                                spread = ""
                            />
                       </section>
                    </section>
                    <section className='flex flex-col gap-2 mt-8'>
                        <h3 className='uppercase text-darkorange'>payment details</h3>
                         <section className='grid grid-cols-1 gap-4 mt-8 md:grid-cols-2  '>
                            <div className=' md:col-start-2 flex flex-row border-2 py-4 px-4  border-neutral-300  rounded-md hover:border-lightorange/50 focus:border-darkorange outline-none'>
                                <input type="radio" className='mr-4'
                                id='eMoney'
                                name="payment"
                                value="emoney"
                                checked={formState.payment === "emoney"}
                                onChange={handleFormChange}
                                />
                                <label htmlFor="eMoney">e-money</label>
                            </div>
                            
                            <div className=' md:col-start-2 flex flex-row border-2 py-4 px-4  border-neutral-300  rounded-md hover:border-lightorange/50 focus:border-darkorange outline-none'>
                                <input type="radio" className=' mr-4'
                                id='cash'
                                name="payment"
                                value="cash"
                                checked={formState.payment === "cash"}
                                onChange={handleFormChange}
                                />
                                <label htmlFor="cash">Cash on Delivery</label>
                            </div>
                            {formState.payment === "emoney" && 
                                <>
                                  <Input
                                    type="text"
                                    placeholder="567849393"
                                    handleFormChange= {handleFormChange}
                                    value={formState.emoneynumber}
                                    name = "emoneynumber"
                                    error="enter emoney number"
                                    spread = ""
                                  />
                                  <Input
                                    type="text"
                                    placeholder="4321"
                                    handleFormChange= {handleFormChange}
                                    value={formState.emoneypin}
                                    name = "emoneypin"
                                    error="enter emoney pin"
                                    spread = ""
                                  />
                                </>
                            }
                        </section>
                    </section>
            </div>
                
            <div className="  bg-customwhite shadow-2xl w-[90vw] md:w-[80vw] py-8 px-6 mx-auto rounded-xl lg:w-[25%] lg:mx-0 lg:self-start ">
                            <h2 className="font-semibold uppercase text-xl ">Summary</h2>
                            <div className="flex flex-col gap-4 summary mt-8  "> 
                               {items}
                            </div>
                    
                            <div className='flex justify-between items-center mt-6'>
                                <h2 className='font-semibold uppercase text-customtext '>Total</h2>
                                <h3 className='text-customBlack font-bold '>${total} </h3>
                            </div>
                            <div className='flex justify-between items-center mt-6'>
                                <h2 className='font-semibold uppercase text-customtext'>SHipping</h2>
                                <h3 className='text-customBlack font-bold '>${ShippingFee}</h3>
                            </div>
                            <div className='flex justify-between items-center mt-6'>
                                <h2 className='font-semibold uppercase text-customtext'>Vat (Included)</h2>
                                <h3 className='text-customBlack font-bold '>$1,079</h3>
                            </div>
                            <div className='flex justify-between items-center mt-6'>
                                <h2 className='font-semibold uppercase text-customtext'>Grand Total</h2>
                                <h3 className='text-darkorange font-bold '>${total + ShippingFee}</h3>
                            </div>
                            <div className='w-[100%] mx-auto bg-darkorange p text mt-6 text-center rounded-md '>
                                <button onClick={foamAction} type='submit' className='text-customwhite w-full submit py-4 font-semibold uppercase hover:bg-lightorange rounded-md disabled:bg-lightorange' disabled= {buttonActive}>CONTINUE & PAy</button>
                            </div>
            </div> 
        </section>
        </form>
        </section>
    )
}