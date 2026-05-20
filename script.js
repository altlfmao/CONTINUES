// Profile visits counter

let profileViews =
localStorage.getItem("profileViews");

if(profileViews === null){

profileViews = 0;

}

profileViews++;

localStorage.setItem(
"profileViews",
profileViews
);

document.getElementById(
"profileViews"
).innerText = profileViews;





// Card clicks counter

let cardViews =
localStorage.getItem("cardViews");

if(cardViews === null){

cardViews = 0;

}

document.getElementById(
"cardViews"
).innerText = cardViews;



const cards =
document.querySelectorAll(".card");

cards.forEach(card => {

card.addEventListener("click", () => {

cardViews++;

localStorage.setItem(
"cardViews",
cardViews
);

document.getElementById(
"cardViews"
).innerText = cardViews;

});

});



console.log(
"CONTINUES GAMER LOADED"
);