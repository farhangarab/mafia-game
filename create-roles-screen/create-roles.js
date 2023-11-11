document.getElementById('listForm').addEventListener('submit', function(event) {
  event.preventDefault();
  var listInput = document.getElementById('listInput').value;
  var itemsArray = listInput.split('،').map(item => item.trim());

  // Store the itemsArray in a session storage
  sessionStorage.setItem('roles', JSON.stringify(itemsArray));

  window.location.href = '../display-roles-screen/display-roles.html';
});

function redirectToHome() {
  window.location.href = "../index.html";
}