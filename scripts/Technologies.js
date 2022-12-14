import { getTechnologies } from "./database.js";
const technologies = getTechnologies()
import { setTech } from "./database.js";


document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "tech") {
            setTech(parseInt(event.target.value))
        }
    }
)

export const Technologies = () => {
    let html = "<h2>Technologies</h2>"
html += '<select id="tech">'
html += '<option value="0">Select your technology package</option>'

    const listItems = technologies.map(
        (tech) => {
            return `<option value="${tech.id}">${tech.name}</option>`
        }
    )
    html += listItems.join("")

    html += "</select>"
    return html
}