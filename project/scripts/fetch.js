const url = 'https://cors-anywhere.herokuapp.com/api.myanimelist.net/v2/anime/10357?fields=rank,mean,alternative_titles';
const options = {
	method: 'GET',
	headers: {
		'X-MAL-CLIENT-ID': 'c0b575cec2a60d4b3690435b7a440401',
		'Content-Type': 'application/json',
	}
};

const getAnimeDetails = async () => {
	try {
		const response = await fetch(url, options);
		const result = await response.json();
		console.log(result);
	} catch (error) {
		console.error(error);
	}
}
getAnimeDetails();