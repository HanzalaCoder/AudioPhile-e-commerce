import { useNavigate } from 'react-router-dom';


export default function Cart({data}) {
    const navigate = useNavigate();
    function removeAll() {
        const container = document.querySelector(".cartContainer")
        const Total = document.querySelector(".total")
        const cartTotal = document.querySelector(".cartTotal")
        const cartText = document.querySelector(".cartText")
        const button = document.querySelector(".checkout")
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


    function toggleCart() {
        const cart = document.querySelector(".cart")
        const overlay = document.getElementById("overlay")
        cart.classList.add("h-0")
        cart.classList.remove("h-fit")
        overlay.classList.add("hidden")
    }


    const handleCheckoutClick = () => {
        console.log("hi")
        toggleCart()
        const container = Array.from(document.querySelector(".cartContainer").children)
        const total = parseInt(document.querySelector(".total").textContent.split("$")[1])
        let arrayChilds =   container.map(item => {
                let price = parseInt(item.querySelector(".price").textContent.split("$")[1])
                let image = item.querySelector(".cartimg").getAttribute("src")
                let count  = item.querySelector(".item-count").textContent
                let id = parseInt(item.querySelector(".idNum ").textContent)
                let name = data[id-1].shortName

                /* return (
                    <div key={id} className="flex items-center gap-4">
                      <img className="w-[100px]" src={image} alt="" />
                      <div className="flex flex-col gap-2">
                        <h2 className="font-semibold text-lg text-customblack">{name}</h2>
                        <span className="font-semibold text-customtext">$ {price}</span>
                      </div>
                      <h4 className="font-semibold text-customtext">X{count}</h4>
                    </div>
                ) */;
                return {
                    id,
                    name,
                    price,
                    image,
                    count,
                };
                
        })
        console.log(arrayChilds)
    
        // Programmatically navigate to the /checkout route and pass the 'list' as state
        navigate('/Checkout', { state: { data: arrayChilds,total :total  } });
      };
    
  


  
    return(
        <section className=" cart h-0 flex  overflow-hidden absolute top-28 right-0 w-[90vw]  sm:w-[420px] shadow-2xl z-50  bg-almostwhite rounded-lg flex-col gap-6">
            <div className="flex justify-between items-center px-6 mt-6">
                <h1 className="font-bold text-customblack text-xl" >CART <span className="cartText" >(0)</span></h1>
                <button className="text-customtext font-semibold underline hover:no-underline " onClick={removeAll} >Remove all</button>
            </div>
            <div className="cartContainer flex flex-col  px-4" >
            </div>
            <div className="flex justify-between text-customtext font-semibold px-6">
                <h3>TOTAL</h3>
                <h3 className="total" >$0</h3>
            </div>
          
            <button className="bg-darkorange checkout w-[90%]  px-6  mx-auto  py-3   m-6 text-customwhite font-semibold rounded-md hover:bg-lightorange disabled:bg-lightorange" 
            onClick={handleCheckoutClick} > CHECKOUT </button>
       
           
        </section>
    )
}