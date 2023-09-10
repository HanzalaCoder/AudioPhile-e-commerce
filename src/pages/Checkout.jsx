import { useContext } from 'react';
import {stateContext}  from "../components/LayoutPages"


export default function Checkout() {
    const [dataArray, setDataArray] = useContext(stateContext)
    let total = 0
    let ShippingFee = 100
    countTotal()
    let items = dataArray.map(item => {
        return (
            <div key={item.id} className="flex items-center gap-4">
                <img className="w-[80px] rounded-lg" src={item.cartImg} alt="" />
                <div className="flex flex-col gap-2">
                    <h2 className="font-semibold text-lg text-customblack max-w-[10ch] sm:max-w-[20ch]">{item.name}</h2>
                    <span className="font-semibold text-customtext">$ {item.price}</span>
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
    return (
        <section className='bg-neutral-200/50'>
            <section className=" py-20 flex flex-col gap-8 ">
                    <div className="  bg-customwhite shadow-2xl w-[90vw] md:w-[80vw] py-8 px-6 mx-auto rounded-xl ">
                            <h2 className="font-semibold uppercase text-xl ">Summary</h2>
                            <div className="flex flex-col gap-4 summary mt-8  "> 
                               {items}
                            </div>
                    
                            <div className='flex justify-between items-center mt-6'>
                                <h2 className='font-semibold uppercase text-customtext '>Total</h2>
                                <h3 className='text-customBlack font-bold '>$ {total} </h3>
                            </div>
                            <div className='flex justify-between items-center mt-6'>
                                <h2 className='font-semibold uppercase text-customtext'>SHipping</h2>
                                <h3 className='text-customBlack font-bold '>$ {ShippingFee}</h3>
                            </div>
                            <div className='flex justify-between items-center mt-6'>
                                <h2 className='font-semibold uppercase text-customtext'>Vat (Included)</h2>
                                <h3 className='text-customBlack font-bold '>$ 1,079</h3>
                            </div>
                            <div className='flex justify-between items-center mt-6'>
                                <h2 className='font-semibold uppercase text-customtext'>Grand Total</h2>
                                <h3 className='text-darkorange font-bold '>$ {total + ShippingFee}</h3>
                            </div>
                    </div>
                </section>

      

        </section>
       
        
    )
}