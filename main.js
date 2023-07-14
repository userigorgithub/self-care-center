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

// global variables 👇
var favorites = [];

// randomizer function 👇
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

// query selector variables 👇
var background = document.querySelector("body");
var animation = document.querySelector(".loading");

var submitBtn = document.querySelector(".submit-button");

var loginPage = document.querySelector(".login-page");
var mainPage = document.querySelector(".main-page");
var viewAllMessagesPage = document.querySelector(".view-all-messages-page");
var favoritesPage = document.querySelector(".favorites-page");

var welcome = document.querySelector(".main-page-welcome-input");
var welcomeInput = document.querySelector("#name");
var logoutBtn = document.querySelector(".logout");

var receiveMessageBtn = document.querySelector(".receive-message-button");
var favoriteBtn = document.querySelector(".favorite-button");
var backBtn = document.querySelector(".back-button");
var radioAll = document.getElementsByTagName("input");

var errorMessage = document.querySelector(".error-message");

var meditateLogo = document.querySelector(".meditate-logo");
var response = document.querySelector(".response");
var randomAnswer = document.querySelector(".random-answer");
var affirmationValue = document.querySelector("#affirmation").value;
var mantraValue = document.querySelector("#mantra").value;

var viewAllMessagesBtn = document.querySelector(".view-all-messages-button");
var allAffirmations = document.querySelector(".affirmations-list");
var allMantras = document.querySelector(".mantras-list");
var backToMainAllBtn = document.querySelector(".back-to-main-from-all-btn");

var viewFavMessagesBtn = document.querySelector(".view-favorites-button");
var savedFavMessages = document.querySelector(".saved-affirmations-mantras");
var backToMainBtn = document.querySelector(".back-to-main-from-fav-btn");

var addNewMsgArea = document.querySelector(".add-message-area");
var addMessageBtn = document.querySelector(".add-message-button");
var newType = document.querySelector(".message-type-input");
var newMessage = document.querySelector(".message-input");
var addBtn = document.querySelector(".add-button");

// event listeners 👇
submitBtn.addEventListener('click', loginToMainPage);
logoutBtn.addEventListener('click', logout);
receiveMessageBtn.addEventListener('click', function() {
  loadAnimation();
  setTimeout(randomResponse, 2000);
});
favoriteBtn.addEventListener('click', favoriteMessage);
backBtn.addEventListener('click', function() {
  clearRadio(radioAll);
  closeMessageBox();
});
viewAllMessagesBtn.addEventListener('click', viewAllMessages);
backToMainAllBtn.addEventListener('click', closeAllMessages);
viewFavMessagesBtn.addEventListener('click', viewFavoriteMessages);
savedFavMessages.addEventListener('click', deleteFavoriteAffMan);
backToMainBtn.addEventListener('click', closeFavorites);
addMessageBtn.addEventListener('click', openCloseNewMessageArea);
addBtn.addEventListener('click', addNewMessage);

// functions and event handlers 👇
function loginToMainPage() {
  event.preventDefault();
  if (welcomeInput.value === "") {
    welcome.innerText = "Welcome, Guest!";
  } else {
    welcome.innerText = `Welcome, ${welcomeInput.value}!`;
  }
  loginPage.classList.add('hidden');
  response.classList.add('hidden');
  mainPage.classList.remove('hidden');
  meditateLogo.classList.remove('hidden');
  clearRadio(radioAll);
}

function logout() {
  mainPage.classList.add('hidden');
  addNewMsgArea.classList.add('hidden');
  loginPage.classList.remove('hidden');
  background.classList.add('background');
  background.classList.remove('man-background');
  background.classList.remove('aff-background');
  clearValues();
}

function randomResponse() {
  if (radioAll[1].checked === true && affirmationValue === "affirmation") {
    var affirmation = affirmations[getRandomIndex(affirmations)];
    randomAnswer.innerHTML = `&#128588 ${affirmation}`;
    errorMessage.innerHTML = "Your Affirmation is:";
    meditateLogo.classList.add('hidden');
    animation.classList.add('hidden');
    response.classList.remove('hidden');
    background.classList.remove('background');
    background.classList.remove('man-background');
    background.classList.add('aff-background');
  } else if (radioAll[2].checked === true && mantraValue === "mantra") {
    var mantra = mantras[getRandomIndex(mantras)];
    randomAnswer.innerHTML = `&#129496 ${mantra}`;
    errorMessage.innerHTML = "Your Mantra is:";
    meditateLogo.classList.add('hidden');
    animation.classList.add('hidden');
    response.classList.remove('hidden');
    background.classList.remove('background');
    background.classList.remove('aff-background');
    background.classList.add('man-background');
  } else {
    errorMessage.innerHTML = "Click Affirmation or Mantra first!";
    animation.classList.add('hidden');
    meditateLogo.classList.remove('hidden');
  }
}

function loadAnimation() {
  meditateLogo.classList.add('hidden');
  response.classList.add('hidden');
  animation.classList.remove('hidden');
}

function favoriteMessage() {
  if (!favorites.includes(randomAnswer.innerText)) {
    favorites.push(randomAnswer.innerText)
  }
}

function closeMessageBox() {
  response.classList.add('hidden');
  meditateLogo.classList.remove('hidden');
  background.classList.add('background');
  background.classList.remove('man-background');
  background.classList.remove('aff-background');
}

function viewAllMessages() {
  mainPage.classList.add('hidden');
  addNewMsgArea.classList.add('hidden');
  viewAllMessagesPage.classList.remove('hidden');
  background.classList.add('background');
  background.classList.remove('man-background');
  background.classList.remove('aff-background');
  viewAllAffirmations();
  viewAllMantras();
}

function viewAllAffirmations() {
  allAffirmations.innerHTML = '';
  for (var i = 0; i < affirmations.length; i++) {
    allAffirmations.innerHTML +=
    `<ol class="affirmations-list">${affirmations[i]}</ol>`
  }
}

function viewAllMantras() {
  allMantras.innerHTML = '';
  for (var i = 0; i < mantras.length; i++) {
    allMantras.innerHTML +=
    `<ol class="mantras-list">${mantras[i]}</ol>`
  }
}

function closeAllMessages() {
  viewAllMessagesPage.classList.add('hidden');
  mainPage.classList.remove('hidden');
}

function viewFavoriteMessages() {
  savedFavMessages.innerHTML = '';
  favorites.forEach(function(item) {
    savedFavMessages.innerHTML +=
    `<div class="aff-man">
      <p class="para" id="${item}">${item}</p>
      <button class="delete-aff-man" id="${item}" onclick="deleteFavoriteAffMan('${item}')">X</button>
    </div>`
  })
  mainPage.classList.add('hidden');
  addNewMsgArea.classList.add('hidden');
  favoritesPage.classList.remove('hidden');
  background.classList.add('background');
  background.classList.remove('man-background');
  background.classList.remove('aff-background');
}

function deleteFavoriteAffMan(event) {
  favorites.forEach(function(item) {
    if (event.target.id === item) {
      favorites.splice(favorites.indexOf(item), 1)
    }
  })
  viewFavoriteMessages();
}

function closeFavorites() {
  favoritesPage.classList.add('hidden');
  mainPage.classList.remove('hidden');
}

function clearRadio(radioAll) {
  for (var i = 0; i < radioAll.length; i++) {
    if (radioAll[i].type === "radio") {
      radioAll[i].checked = false;
      errorMessage.innerHTML = "Randomize your Affirmation or Mantra..."
    }
  }
}

function openCloseNewMessageArea() {
  addNewMsgArea.classList.toggle('hidden');
}

function addNewMessage() {
  if ((newType.value === "Affirmation") && (newMessage.value !== "") && (!affirmations.includes(newMessage.value))) {
    affirmations.push(newMessage.value);
    alert("Your new Affirmation was added!");
  } else if ((newType.value === "Mantra") && (newMessage.value !== "") && (!mantras.includes(newMessage.value))) {
    mantras.push(newMessage.value);
    alert("Your new Mantra was added!");
  } else if ((affirmations.includes(newMessage.value)) || (mantras.includes(newMessage.value))) {
    alert("You cannot enter same message twice!")
  } else {
    alert("Use Affirmation or Mantra type and enter both values!")
  }
  clearValues();
}

function clearValues() {
  newType.value = "";
  newMessage.value = "";
  welcomeInput.value = "";
}
