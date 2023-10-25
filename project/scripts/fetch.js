/* Declare and initialize global variables */
const container = document.getElementById("anime-grid");
let animeList = [];

/* async getAnimes Function using fetch()*/
const getAnimes = async () => {
	const url = 'https://kitsu.io/api/edge/anime?filter[categories]=adventure';
	const options = {
		method: 'GET',
		headers: {
			'Accept': 'application/vnd.api+json',
			'Content-Type': 'application/vnd.api+json'
		}
	};
	try {
		const response = await fetch(url, options);
		if (response.ok)
		{
			animeList = await response.json();
			// console.log(animeList);
			displayAnimes(animeList.data);
		}
	} catch (error) {
		console.error(error);
	}
}

/* async displayAnimes Function */
const displayAnimes = async (animes) => {
	animes.forEach((anime) => {
		let section = document.createElement("section");
		section.setAttribute("class", "showcard");
				
		let div = document.createElement("div");
		div.setAttribute("class", "side-section");
		
		let img = document.createElement("img");
		img.setAttribute("src", anime.attributes.posterImage.small, "alt", anime.attributes.canonicalTitle, "class", "posterImage");
		section.appendChild(img);

		let h2 = document.createElement("h2");
		h2.textContent = anime.attributes.canonicalTitle;
		div.appendChild(h2);

		let para1 = document.createElement("p");
		para1.setAttribute("class", "period");
		para1.textContent = `${new Date(anime.attributes.startDate).getFullYear()} - ${new Date(anime.attributes.endDate).getFullYear()}`;
		div.appendChild(para1);

		let para2 = document.createElement("p");
		para2.setAttribute("class", "subtype");
		para2.textContent = anime.attributes.subtype;
		div.appendChild(para2);

		let para3 = document.createElement("p");
		para3.setAttribute("class", "averageRating");
		para3.innerHTML = `<img src="./images/rating-star.svg", alt="Rating">${anime.attributes.averageRating}`;
		div.appendChild(para3);

		let para4 = document.createElement("p");
		para4.setAttribute("class", "synopsis");
		para4.textContent = anime.attributes.synopsis;
		div.appendChild(para4);

		section.appendChild(div);
		container.appendChild(section);
	})
}

const reset = function(){
    if (container.hasChildNodes){
        container.innerHTML = "";
    }
};

/* sortBy Function */
const sortBy = function(animes){
    reset();
    let filter = document.getElementById("sortBy").value;
    switch(filter){        
        case "highest":
            displayAnimes(animes.filter((anime) => {
                return anime.attributes.averageRating > 80;
            }));
            break;
        case "latest":
            displayAnimes(animes.filter((anime) => {
                return new Date(anime.attributes.endDate).getFullYear() > 2017;
            }));
            break;
        case "all":
        default:
            displayAnimes(animes);
    }
};

getAnimes();

/* Event Listener */
document.getElementById("sortBy").addEventListener("change", () => {sortBy(animeList.data)});