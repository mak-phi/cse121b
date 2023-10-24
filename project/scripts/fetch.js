const url = 'https://api.myanimelist.net/v2/anime';
const options = {
	method: 'GET',
	headers: {
		'X-MAL-CLIENT-ID': 'c0b575cec2a60d4b3690435b7a440401'
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