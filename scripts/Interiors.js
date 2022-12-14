import { getInteriors } from "./database.js";
const interiors = getInteriors()
import { setInterior } from "./database.js";

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "interior") {
            setInterior(parseInt(event.target.value))   }
    }
)

export const Interiors = () => {
    let html = "<h2>Interior Packages</h2>"
    html += '<select id="interior">'
    html += '<option value="0">Select your interior package</option>'
    
        const listItems = interiors.map(
            (interior) => {
                return `<option value="${interior.id}">${interior.name}</option>`
            }
        )
        html += listItems.join("")
    
        html += "</select>"
        return html
    }