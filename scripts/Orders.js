import { getColors, getInteriors, getTechnologies, getWheels, getOrders } from "./database.js";

const colors = getColors()
const interiors = getInteriors()
const technologies = getTechnologies()
const wheels = getWheels()

const buildOrderListItem = (order) => {

    const foundColor = colors.find(
        (color) => {
            return color.id === order.colorId
        }
    )

    const foundInterior = interiors.find(
        (interior) => {
            return interior.id === order.interiorId
        }
    )

    const foundTech = technologies.find(
        (technology) => {
            return technology.id === order.techId
        }
    )

    const foundWheel = wheels.find(
        (wheel) => {
            return wheel.id === order.wheelId
        }
    )

    const totalCost = foundColor.price + foundInterior.price + foundTech.price + foundWheel.price
    
    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
     })
     

    
    return `<li>
        Order #${order.id} costs ${costString}
    </li>`
}

export const Orders = () => {
   
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}

