import { getWheels } from "./database.js";
const wheels = getWheels()
import { setWheels } from "./database.js";

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "wheel") {
            setWheels(parseInt(event.target.value))
        }
    }
)

export const CarWheels = () => {
    let html = "<h2>Wheels</h2>"
html += '<select id="wheel">'
html += '<option value="0">Select your wheels</option>'

    const listItems = wheels.map(
        (wheel) => {
            return `<option value="${wheel.id}">${wheel.name}</option>`
        }
    )
    html += listItems.join("")

    html += "</select>"
    return html
}