



document.addEventListener("change", (event) => {

})

// Requirement: The radio input elements that this component funcion renders must all have a name of "entree"
export const EntreesHTML = async () =>{
    const response = await fetch("http://localhost:8088/entrees")
    const entrees = await response.json();
    let html = `<ul>`
    let entreesListArray = entrees.map(entree => {
       return `<li>
                    <input type="radio" name="entree" value="${entree.id}">${entree.name}
                </li>`
    })

    html += entreesListArray.join("")
    html += `<ul>`
    return html

}