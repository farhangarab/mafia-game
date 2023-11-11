document.addEventListener('DOMContentLoaded', function() {
  var roles = JSON.parse(sessionStorage.getItem('roles'));
  var itemList = document.getElementById('itemList');
  var showRolesBtn = document.getElementById('showRolesBtn');
  var remainingRoles = [...roles];
  var allRolesAssigned = false;
  var showingRole = false; // New variable to track if the last displayed item was a role

  function displayRandomRole() {
    if (showingRole && remainingRoles.length > 0) {
      itemList.innerText = "نقش خود را انتخاب کنید!"; // Display the text before showing another role
      showingRole = false;
    } else if (remainingRoles.length > 0) {
      var randomIndex = Math.floor(Math.random() * remainingRoles.length);
      var randomRole = remainingRoles[randomIndex];
      remainingRoles.splice(randomIndex, 1);

      itemList.innerText = randomRole;
      showingRole = true;
    } else {
      itemList.innerText = "همه نقش ها سپرده شد!";
      showRolesBtn.removeEventListener('click', displayRandomRole);
      showRolesBtn.style.backgroundColor = "green";
      showRolesBtn.innerText = "انجام شد";
      allRolesAssigned = true;
    }
  }

  if (!roles || (roles.length === 1 && !roles[0])) {
    itemList.innerText = "هیچ نقشی وارد نشده است!";
    showRolesBtn.innerText = "بازگشت!";
    var hasClickedAgain = true;

    showRolesBtn.addEventListener('click', function() {
      if (hasClickedAgain) {
        window.location.href = "../create-roles-screen/create-roles.html";
      } else {
        hasClickedAgain = true;
        displayRandomRole();
      }
    });
  } else {
    itemList.innerText = "نمایش نقش";
    showRolesBtn.addEventListener('click', function() {
      if (allRolesAssigned) {
        window.location.href = "../index.html";

      } else {
        displayRandomRole();
      }
    });
  }
});

function redirectToHome() {
  window.location.href = "../index.html";
}