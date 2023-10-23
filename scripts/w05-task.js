/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById("temples");
let templeList = [];

/* async displayTemples Function */
const displayTemples = async (temples) => {
    temples.forEach((temple) => {
        let article = document.createElement("article");
        
        let h3 = document.createElement("h3");
        h3.textContent = temple.templeName;
        
        let img = document.createElement("img");
        img.setAttribute("src", temple.imageUrl, "alt", temple.location);
        
        article.appendChild(h3);
        article.appendChild(img);
        templesElement.appendChild(article);
    })
};



/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const url = "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json";
    const response = await fetch(url);
    if (response.ok) {
        templeList = await response.json();
        displayTemples(templeList);
    }
};

/* reset Function */
const reset = function(){
    if (templesElement.hasChildNodes){
        templesElement.innerHTML = "";
    }
};

/* sortBy Function */
const sortBy = function(temples){
    reset();
    let filter = document.getElementById("sortBy").value;
    switch(filter){
        case "utah":
            displayTemples(temples.filter((temple) => {
                return temple.location.includes("Utah");
            }));
            break;
        case "notutah":
            displayTemples(temples.filter((temple) => {
                return !(temple.location.includes("Utah"));
            }));
            break;
        case "older":
            displayTemples(temples.filter((temple) => {
                return new Date(temple.dedicated).getFullYear() < 1950;
            }));
            break;
        case "all":
        default:
            displayTemples(temples);
    }
};


getTemples();

/* Event Listener */
document.getElementById("sortBy").addEventListener("change", () => {sortBy(templeList)});