import { useContext,useState,useRef } from 'react';
import {stateContext}  from "../components/LayoutPages"
import Input from '../components/Input';
import CheckoutConfirmation from '../components/CheckoutConfirmation';

export default function Checkout() {
    const [dataArray, setDataArray] = useContext(stateContext)
    const [buttonDisable,setButtonDisable] = useState(true)
    const [confirmtion,setConfirmation] = useState("-translate-x-[250%] ")

    const [formState,setFormStata] = useState({
        name  : {value : "", error : ""},
        email : {value : "", error : ""},
        phone: {value : "", error : ""},
        address: {value : "", error : ""},
        zip :{value : "", error : ""},
        city : {value : "", error : ""},
        country : {value : "", error : ""},
        emoneynumber: {value : "", error : ""},
        emoneypin: {value : "", error : ""},
        payment : {value : "emoney", error : ""},
     })
    function handleFormChange(event) {
        const {name,value,type,checked} = event.target
        let error = ""
        if (name === "name") {
            if(!validateString(value)) {
                error = "Name can't be empty"
            }
        } else if (name === "email") {
            if(!validateEmail(value)) {
                error = "Enter a valid email"
            }
        } else if (name === "phone" || name === "zip"|| name === "emoneynumber" || name === "emoneypin") {
            if(!isNumeric(value)) {
                error = `Enter a correct ${name}`
            }
        } else if (name === "address" || name === "city" || name === "country") {
            if(!validateString(value)) {
                error =  `Enter a correct ${name}`
            }
        } 
        // Create a copy of the formState and update the specific field
        const updatedFormState = {
        ...formState,
        [name]: {
            value: type === "checkbox" ? checked : value,
            error: error,
        },
        };

        // Check if all fields are valid and enable/disable the button
        const isValid = Object.values(updatedFormState).every((field) => field.error === "" && field.value !== "");
        setFormStata(updatedFormState);
        setButtonDisable(!isValid);
    }
    let ShippingFee = 100
    let total = 0
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
        window.scrollTo(0, 0);
        setConfirmation("-translate-x-[0%]")
    }

    function validateString(name) {
        return name.trim() !== "";
      }
      
      function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
    function isNumeric(value) {
        return !isNaN(value);
      }
    return (
        <section className='bg-neutral-200/50 relative'>
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
                                value={formState.name.value}
                                name = "name"
                                error={formState.name.error}
                                spread = "col-span-1"
                                liveValidation={true}
                            />
                            <Input
                                type="email"
                                placeholder="hanzala@outlook.gmail.com"
                                handleFormChange= {handleFormChange}
                                value={formState.email.value}
                                name = "email"
                                error={formState.email.error}
                                spread = "col-span-1"
                                liveValidation={true}
                            />
                            <Input
                                type="text"
                                placeholder="+923125454547"
                                handleFormChange= {handleFormChange}
                                value={formState.phone.value}
                                name = "phone"
                                error={formState.phone.error}
                                spread = "col-span-1"
                                liveValidation={true}
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
                                value={formState.address.value}
                                name = "address"
                                error={formState.address.error}
                                spread = "md:col-span-2"
                                liveValidation={true}
                            />
                            <Input
                                type="text"
                                placeholder="7870"
                                handleFormChange= {handleFormChange}
                                value={formState.zip.value}
                                name = "zip"
                                error={formState.zip.error}
                                spread = ""
                                liveValidation={true}
                            />
                            <Input
                                type="text"
                                placeholder="manhatan New York"
                                handleFormChange= {handleFormChange}
                                value={formState.city.value}
                                name = "city"
                                error={formState.city.error}
                                spread = ""
                                liveValidation={true}
                            />
                            <Input
                                type="text"
                                placeholder="USA"
                                handleFormChange= {handleFormChange}
                                value={formState.country.value}
                                name = "country"
                                error={formState.country.error}
                                spread = ""
                                liveValidation={true}
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
                                checked={formState.payment.value === "emoney"}
                                onChange={handleFormChange}
                                />
                                <label htmlFor="eMoney">e-money</label>
                            </div>
                            
                            <div className=' md:col-start-2 flex flex-row border-2 py-4 px-4  border-neutral-300  rounded-md hover:border-lightorange/50 focus:border-darkorange outline-none'>
                                <input type="radio" className=' mr-4'
                                id='cash'
                                name="payment"
                                value="cash"
                                checked={formState.payment.value === "cash"}
                                onChange={handleFormChange}
                                />
                                <label htmlFor="cash">Cash on Delivery</label>
                            </div>
                            {formState.payment.value === "emoney" && 
                                <>
                                  <Input
                                    type="text"
                                    placeholder="567849393"
                                    handleFormChange= {handleFormChange}
                                    value={formState.emoneynumber.value}
                                    name = "emoneynumber"
                                    error={formState.emoneynumber.error}
                                    spread = ""
                                    liveValidation={true}
                                  />
                                  <Input
                                    type="text"
                                    placeholder="4321"
                                    handleFormChange= {handleFormChange}
                                    value={formState.emoneypin.value}
                                    name = "emoneypin"
                                    error={formState.emoneypin.error}
                                    spread = ""
                                    liveValidation={true}
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
                                <button onClick={foamAction} type='submit' className='text-customwhite w-full submit py-4 font-semibold uppercase hover:bg-lightorange rounded-md disabled:bg-lightorange' disabled= {buttonDisable}>CONTINUE & PAy</button>
                            </div>
            </div> 
        </section>
        </form>
        <CheckoutConfirmation value= {confirmtion} />

        </section>
    )
}