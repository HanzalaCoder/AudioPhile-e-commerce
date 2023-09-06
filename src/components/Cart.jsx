

export default function Cart() {
    function removeAll() {
        const container = document.querySelector(".cartContainer")
        const Total = document.querySelector(".total")
        const cartTotal = document.querySelector(".cartTotal")
        const cartText = document.querySelector(".cartText")
        const childrens = Array.from(container.children)
        if(childrens.length > 0) {
            childrens.forEach(child => {
                container.removeChild(child)
            })

        }
        Total.textContent = "$0"
        cartTotal.textContent = "0"
        cartTotal.classList.add("hidden")
        cartText.textContent = `(${0})`
    }


    
    return(
        <section className=" cart h-0 flex  overflow-hidden absolute top-28 right-0 w-[350px]  sm:w-[400px] shadow-2xl z-50  bg-almostwhite rounded-lg flex-col gap-6">
            <div className="flex justify-between items-center px-6 mt-6">
                <h1 className="font-bold text-customblack text-xl" >CART <span className="cartText" >(0)</span></h1>
                <button className="text-customtext font-semibold hover:underline " onClick={removeAll} >Remove all</button>
            </div>
            <div className="cartContainer flex flex-col  px-4" >
            </div>
            <div className="flex justify-between text-customtext font-semibold px-6">
                <h3>TOTAL</h3>
                <h3 className="total" >$0</h3>
            </div>
            <button className="bg-darkorange  py-3   m-6 text-customwhite font-semibold rounded-md hover:bg-lightorange"  > CHECKOUT </button>
        </section>
    )
}