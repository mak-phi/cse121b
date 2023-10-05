/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Roy Makau Mutua";
let currentYear = 2023;
const profilePicture = "../images/profile.jpg";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
// imageElement.setAttribute("src", profilePicture);
imageElement.src = profilePicture;
imageElement.setAttribute("alt", `Profile picture of ${fullName}`);

/* Step 5 - Array */
let favoriteDish = ["Fried fish", "Ugali", "Kachumbari", "Lemon squeeze"];
foodElement.textContent = favoriteDish;
let favoriteDrink = "Sugar cane juice";
favoriteDish.push(favoriteDrink);
foodElement.innerHTML += `<br>${favoriteDish}`;
favoriteDish.shift();
foodElement.innerHTML += `<br>${favoriteDish}`;
favoriteDish.pop();
foodElement.innerHTML += `<br>${favoriteDish}`;