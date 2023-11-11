document.addEventListener('DOMContentLoaded', function() {
  var cards = JSON.parse(sessionStorage.getItem('cards'));
  var itemList = document.getElementById('itemList');
  var showCardsBtn = document.getElementById('showCardsBtn');
  var remainingCards = [...cards];
  var isCardDisplayed = false;
  var allCardsAssigned = false;
  var showingCard = false; // New variable to track if the last displayed item was a Card

  function displayRandomCard() {
    if (showingCard && remainingCards.length > 0) {
      itemList.innerText = "کارت خود را انتخاب کنید!"; // Display the text before showing another Card
      showingCard = false;
    } else if (remainingCards.length > 0) {
      var randomIndex = Math.floor(Math.random() * remainingCards.length);
      var randomCard = remainingCards[randomIndex];
      remainingCards.splice(randomIndex, 1);

      itemList.innerText = randomCard;
      showingCard = true;
    } else {
      itemList.innerText = "همه کارت ها سپرده شد!";
      showCardsBtn.removeEventListener('click', displayRandomCard);
      showCardsBtn.style.backgroundColor = "green";
      showCardsBtn.innerText = "انجام شد";
      allCardsAssigned = true;
    }
  }

  if (!cards || (cards.length === 1 && !cards[0])) {
    itemList.innerText = "هیچ کارتی وارد نشده است!";
    showCardsBtn.innerText = "بازگشت!";
    var hasClickedAgain = true;

    showCardsBtn.addEventListener('click', function() {
      if (hasClickedAgain) {
        window.location.href = "../create-cards/create-cards.html";
      } else {
        hasClickedAgain = true;
        displayRandomCard();
      }
    });
  } else {
    itemList.innerText = "نمایش کارت";
    showCardsBtn.addEventListener('click', function() {
      if (allCardsAssigned) {
        window.location.href = "../../index.html";
      } else {
        displayRandomCard();
      }
    });
  }
});

function redirectToHome() {
  window.location.href = "../../index.html";
}