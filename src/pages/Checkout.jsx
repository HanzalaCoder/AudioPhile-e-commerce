import { useContext,useState } from 'react';
import {stateContext}  from "../components/LayoutPages"


export default function Checkout() {
    const [dataArray, setDataArray] = useContext(stateContext)
    const [buttonActive,setButtonActive] = useState(true)
    const [formState,setFormStata] = useState({
        name  : "",
        email : "",
        phone: "",
        address: "",
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
        console.log(formState.name)
      

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
                        <section  className='flex flex-col gap-12'>
                            <div>
                                <h3 className='uppercase text-darkorange'>Biling Details </h3>
                                <section className='grid grid-cols-1 gap-4 mt-8 md:grid-cols-2'>
                                    <div>
                                        <div className='flex justify-between items-center px-1 mb-3'>
                                            <label htmlFor="name" className='text-almostBlack font-semibold'>Name</label>
                                            <small className='message text-customblack font-medium mr-2'>message</small>
                                        </div>
                                        <input type="text" className='border-2 py-4 px-4 border-neutral-300 w-full rounded-md hover:border-lightorange/50 focus:border-almostBlack outline-none'
                                        placeholder='Hanzala Khan'
                                        onChange={handleFormChange}
                                        name='name'
                                        value={formState.name}
                                        required
                                        id='name'
                                        />
                                    </div>
                                    <div>
                                        <div className='flex justify-between items-center px-1 mb-3'>
                                            <label htmlFor="email" className='text-almostBlack font-semibold capitalize '>email address</label>
                                            <small className='message text-customblack font-medium mr-2'>message</small>
                                        </div>
                                        <input type="email" className='border-2 py-4 px-4 border-neutral-300 w-full rounded-md hover:border-lightorange/50 focus:border-almostBlack outline-none'
                                        placeholder='hanzala123@gmail.com'
                                        onChange={handleFormChange}
                                        name='email'
                                        value={formState.email}
                                        id='email'
                                        />
                                    </div>
                                    <div>
                                        <div className='flex justify-between items-center px-1 mb-3'>
                                            <label htmlFor="phone" className='text-almostBlack font-semibold capitalize '>phone</label>
                                            <small className='message text-customblack font-medium mr-2'>message</small>
                                        </div>
                                        <input type="phone" className='border-2 py-4 px-4 border-neutral-300 w-full rounded-md hover:border-lightorange/50 focus:border-almostBlack outline-none'
                                        placeholder="+923453466572"
                                        onChange={handleFormChange}
                                        name='phone'
                                        value={formState.phone}
                                        required
                                        id='phone'
                                        />
                                    </div>

                                </section>
                            </div>

                            <div>
                                <h3 className='uppercase text-darkorange'>shipping info </h3>
                                <section className='grid grid-cols-1 gap-4 mt-8 md:grid-cols-2'>
                                    <div>
                                        <div className='flex justify-between items-center px-1 mb-3'>
                                            <label htmlFor="address" className='text-almostBlack font-semibold capitalize'>address</label>
                                            <small className='message text-customblack font-medium mr-2'>message</small>
                                        </div>
                                        <input type="text" className='border-2 py-4 px-4 border-neutral-300 w-full rounded-md hover:border-lightorange/50 focus:border-almostBlack outline-none'
                                        placeholder='Area51 5 Avenue'
                                        onChange={handleFormChange}
                                        name='address'
                                        value={formState.address}
                                        required
                                        id='address'
                                        />
                                    </div>
                                    <div>
                                        <div className='flex justify-between items-center px-1 mb-3'>
                                            <label htmlFor="city" className='text-almostBlack font-semibold capitalize '>City</label>
                                            <small className='message text-customblack font-medium mr-2'>message</small>
                                        </div>
                                        <input type="text" className='border-2 py-4 px-4 border-neutral-300 w-full rounded-md hover:border-lightorange/50 focus:border-almostBlack outline-none'
                                        placeholder='Quetta Balochistan'
                                        onChange={handleFormChange}
                                        name='city'
                                        value={formState.city}
                                        required
                                        id='city'
                                        />
                                    </div>
                                    <div>
                                        <div className='flex justify-between items-center px-1 mb-3'>
                                            <label htmlFor="country" className='text-almostBlack font-semibold capitalize '>Country</label>
                                            <small className='message text-customblack font-medium mr-2'>message</small>
                                        </div>
                                        <input type="text" className='border-2 py-4 px-4 border-neutral-300 w-full rounded-md hover:border-lightorange/50 focus:border-almostBlack outline-none'
                                        placeholder="Pakistan"
                                        onChange={handleFormChange}
                                        name='country'
                                        value={formState.country}
                                        required
                                        id='country'
                                        />
                                    </div>

                                </section>
                            </div>

                            <div>
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

                               
                            
                                
                                    {formState.payment === "emoney" &&<><div>
                                        <div className='flex justify-between items-center px-1 mb-3'>
                                            <label htmlFor="eMoneyNumber" className='text-almostBlack font-semibold  '>e-Money Number</label>
                                            <small className='message text-customblack font-medium mr-2'>message</small>
                                        </div>
                                        <input type="text" className='border-2 py-4 px-4 border-neutral-300 w-full rounded-md hover:border-lightorange/50 focus:border-almostBlack outline-none'
                                        placeholder='2334546565'
                                        onChange={handleFormChange}
                                        name='emoneynumber'
                                        value={formState.emoneynumber}
                                        required
                                        id='eMoneyNumber'
                                        />
                                    </div>
                                    <div>
                                        <div className='flex justify-between items-center px-1 mb-3'>
                                            <label htmlFor="eMoneyPin" className='text-almostBlack font-semibold  '>e-Money Pin</label>
                                            <small className='message text-customblack font-medium mr-2'>message</small>
                                        </div>
                                        <input type="text" className='border-2 py-4 px-4 border-neutral-300 w-full rounded-md hover:border-lightorange/50 focus:border-almostBlack outline-none'
                                        placeholder="6360"
                                        onChange={handleFormChange}
                                        name='emoneypin'
                                        value={formState.emoneypin}
                                        required
                                        id='eMoneyPin'
                                        />
                                    </div></>}

                                </section>
                            </div>



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