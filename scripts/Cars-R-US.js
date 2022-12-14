import { CarWheels } from "./Wheels.js";
import { Technologies } from "./Technologies.js";
import { Colors } from "./Colors.js";
import { Interiors } from "./Interiors.js";
import { addCustomOrder } from "./database.js";
import { Orders } from "./Orders.js";

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton"){
            addCustomOrder()
        }
    }
)

export const CarsRUs = () => {
    return `
    <h1>Cars R Us</h1>
    <article class="choices">
    <section class="choices__wheel options">
    ${CarWheels()}
    </section>
    <section class="choices__color options">
    ${Colors()}
    </section>
    <section class="choices__interior options">
    ${Interiors()}
    </section>
    <section class="choices__technology options">
    ${Technologies()}
    </section>

    <article>
    <button id="orderButton">Create Custom Order</button>
    </article>

    <article class="orders">
    <h2>Custom Car Orders</h2>
   ${Orders()}
    </article>
    `
}