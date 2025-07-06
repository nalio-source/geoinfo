const countries = {
    "italy": {
        "key": "italy",
        "name": "Italy",
        "image": "italia.png",
        "info": "One of the countries of all time",
    },
}


function loadCountry(country) {
    let c = countries[country]
    document.getElementById("country").innerHTML = `<h1>${c.name}</h1><br><img class="country_image" src="images/${c.image}"><h3 class="country_info">${c.info}</h3>`
}


function getCountries(order="descending") {
    let list = Object.values(countries)
    let i = (order == "descending" ? -1 : 1)
    list.sort((a, b) => {
        return a.name>b.name ? 1*i : -1*i
    })
    
    document.getElementById("countries").innerHTML = ""
    list.forEach((e) => {
        let gameFrame = `<button onclick="loadCountry('${e.key}')">${e.name}</button> <br>`;
        document.getElementById("countries").innerHTML += gameFrame
    })
}
