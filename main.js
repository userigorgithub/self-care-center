// data to work with 👇
var affirmations = [
  "I forgive myself and set myself free.",
  "I believe I can be all that I want to be.",
  "I am in the process of becoming the best version of myself.",
  "I have the freedom & power to create the life I desire.",
  "I choose to be kind to myself and love myself unconditionally.",
  "My possibilities are endless.",
  "I am worthy of my dreams.",
  "I am enough.",
  "I deserve to be healthy and feel good.",
  "I am full of energy and vitality and my mind is calm and peaceful.",
  "Every day I am getting healthier and stronger.",
  "I honor my body by trusting the signals that it sends me.",
  "I manifest perfect health by making smart choices."
];

var mantras = [
  "Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.",
  "Don't let yesterday take up too much of today.",
  "Every day is a second chance.",
  "Tell the truth and love everyone.",
  "I am free from sadness.",
  "I am enough.",
  "In the beginning it is you, in the middle it is you and in the end it is you.",
  "I love myself.",
  "I am present now.",
  "Inhale the future, exhale the past.",
  "This too shall pass.",
  "Yesterday is not today.",
  "The only constant is change.",
  "Onward and upward.",
  "I am the sky, the rest is weather."
];

var favorites = [];

// randomizer function 👇
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

// query selector variables 👇
var submitBtn = document.querySelector(".submit-button");

var loginPage = document.querySelector(".login-page");
var mainPage = document.querySelector(".main-page");

var welcome = document.querySelector(".main-page-welcome-input");
var welcomeInput = document.querySelector("#name");

var receiveMessageBtn = document.querySelector(".receive-message-button");
var favoriteBtn = document.querySelector(".favorite-button");

var meditateLogo = document.querySelector(".meditate-logo");
var response = document.querySelector(".response");

var randomAnswer = document.querySelector(".random-answer");

// event listeners 👇
submitBtn.addEventListener('click', loginToMainPage);
receiveMessageBtn.addEventListener('click', randomResponse);
favoriteBtn.addEventListener('click', favoriteMessage);

// functions and event handlers 👇
function loginToMainPage() {
  event.preventDefault();
  welcome.innerText = welcomeInput.value;
  loginPage.classList.add('hidden');
  mainPage.classList.remove('hidden');
}

function randomResponse() {
  event.preventDefault();
  var form = document.querySelector('input[name="choice-option"]:checked').value;
  var affirmation = affirmations[getRandomIndex(affirmations)];
  var mantra = mantras[getRandomIndex(mantras)];
  if (form === "affirmation") {
    randomAnswer.innerHTML = `${affirmation}`;
  } else if (form === "mantra") {
    randomAnswer.innerHTML = `${mantra}`;
  }
  meditateLogo.classList.add('hidden');
  response.classList.remove('hidden');
}

function favoriteMessage() {
  if (!favorites.includes(randomAnswer.innerText)) {
    favorites.push(randomAnswer.innerText)
    console.log(randomAnswer)
    console.log(favorites)
  }
}
