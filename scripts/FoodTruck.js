
import { EntreesHTML } from "./Entrees.js"
import { SidesHTML } from "./SideDishes.js";
import { VeggiesHTML } from "./Vegetables.js";


document.addEventListener("click", (event) => {
    if (event.target.id === "purchase") {

    }
})

export const FoodTruck = async () => {
    const entreesHTML = await EntreesHTML();
    const veggiesHTML = await VeggiesHTML();
    const sidesHTML = await SidesHTML()
    return `
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>
        <div id="choice-container" class="container">
            <div id="choices">
                <div id="entrees" class="choice">
                    <h2>Entree</h2>
                    <!--entree radios here-->
                    ${entreesHTML}
                </div>
                <div id="vegetables" class="choice">
                    <h2>Vegetables</h2>
                    <!--vegetables radios here-->
                    ${veggiesHTML}

                </div> 
                <div id="sidedishes" class="choice">
                    <h2>Side Dishes</h2>
                    <!--side dishes radios here-->
                    ${sidesHTML}
                </div>  
            
            </div>
            <article>
                <button id="purchase">Purchase Combo</button>
            </article>
        </div>
        <article class="customerOrders">
            <h2>Monthly Sales</h2>
            <!--sales-->

        </article>

    `
}
