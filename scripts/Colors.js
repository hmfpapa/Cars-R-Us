import { getColors } from "./database.js"
const colors = getColors()
import { setColor } from "./database.js"

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "color") {
            setColor(parseInt(event.target.value))
        }
    }
)

export const Colors = () => {
    let html = "<h2>Paint Colors</h2>"
    html += '<select id="color">'
    html += '<option value="0">Select your paint color</option>'
    
        const listItems = colors.map(
            (color) => {
                return `<option value="${color.id}">${color.name}</option>`
            }
        )
        html += listItems.join("")
    
        html += "</select>"
        return html
    }