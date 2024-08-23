import { setsidesChoice } from "./TransientState.js"




document.addEventListener("change", (event) => {
    if (event.target.name === "sideDish") {
        setsidesChoice(parseInt(event.target.value))
    }
})

// Requirement: The radio input elements that this component funcion renders must all have a name of "sideDish"
export const SidesHTML = async () => {
    const response = await fetch("http://localhost:8088/sides")
    const sides = await response.json()
    let html = "<ul>"

    const listItems = sides.map(dish => {
        return `<li class="choices__sides">
            <input type="radio" name="sideDish" value="${dish.id}"> ${dish.title}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}

