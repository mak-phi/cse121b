/* LESSON 3 - Programming Tasks */

/* Profile Object  */
const myProfile = {
    name: "Roy Makau Mutua",
    photo: "./images/profile.jpg",
    favoriteFoods: ["Fried fish", "Ugali", "Kachumbari", "Lemon squeeze", "Sugar cane juice"],
    hobbies: ["Gardening", "Watching movies", "Listening to music", "Playing chess"],
    placesLived: [],
};



/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: "Nairobi, Kenya",
        length: "34 years",
    },
    {
        place: "Eldoret, Kenya",
        length: "4 years",
    },
    {
        place: "Thika, Kenya",
        length: "4 years",
    });



/* DOM Manipulation - Output */

/* Name */
document.getElementById("name").textContent = myProfile.name;

/* Photo with attributes */
document.getElementById("photo").src = myProfile.photo;
document.getElementById("photo").setAttribute("alt", `Profile picture of ${myProfile.name}`);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach((food) => {
    let listElement = document.createElement("li");
    listElement.textContent = food;
    document.getElementById("favorite-foods").appendChild(listElement);
});

/* Hobbies List */
myProfile.hobbies.forEach((hobby) => {
    let listElement = document.createElement("li");
    listElement.textContent = hobby;
    document.getElementById("hobbies").appendChild(listElement);
});

/* Places Lived DataList */
myProfile.placesLived.forEach((obj) => {
    let dt = document.createElement("dt");
    dt.textContent = obj.place;
    document.getElementById("places-lived").appendChild(dt);

    let dd = document.createElement("dd");
    dt.textContent = obj.length;
    document.getElementById("places-lived").appendChild(dd);
});

