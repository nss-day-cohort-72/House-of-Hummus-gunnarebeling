



document.addEventListener("change", (event) => {
    if (event.target.name === "vegetable") {
        setVeggie(event.target.value)
    }
})

export const VeggiesHTML = async () => {
    const response = await fetch("http://localhost:8088/veggies")
    const veggies = await response.json();

    let html = `<ul>
        ${
            veggies.map(vegetable => {
                return `<li>
                            <input type="radio" name="vegetable" value="${vegetable.id}" /> ${vegetable.type}
                        </li>`
            }).join("")
        }
    </ul>`

    return html
}
