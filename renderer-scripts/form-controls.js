function addProfileFormHandlers() {}

function addPartnerFormHandlers() {}

function addShockerFormHandlers() {}

function mainPageClickHandlers() {
  const profileButton = document.getElementById("profile-button");
  const newPartnerButton = document.getElementById("new-partner-button");
  profileButton.addEventListener("click", toggleProfileBox);
  newPartnerButton.addEventListener("click", togglePartnerBox);
}

mainPageClickHandlers();
