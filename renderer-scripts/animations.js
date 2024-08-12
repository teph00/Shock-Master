// Staggered Fade In
function staggeredAnimationClass(elements, addClass, removeClass = "", delay = 200) {
  if (elements.length) {
    elements.forEach((element, idx) => {
      setTimeout(() => {
        element.classList.add(addClass);
        element.classList.remove(removeClass);
      }, delay * idx);
    });
  }
}

// Main Window Title Animations
(function () {
  const title = document.getElementById("app-title");
  const subtitle = document.getElementById("app-subtitle");
  const sidebar = document.getElementById("sidebar");
  const main = document.querySelector("main");
  const username = document.getElementById("username");
  const profile = document.getElementById("profile-button");
  // TODO: Check for saved profile
  // - If exists, load onto window and do normal animations
  // - If not exists, show popup with profile form
  setTimeout(() => {
    title.classList.add("title-up");
    subtitle.classList.add("subtitle-out");
    title.classList.remove("title-in");
    subtitle.classList.remove("subtitle-in");
    setTimeout(() => {
      const sidebarButtons = document.querySelectorAll("#sidebar > .buttons > .button");
      title.classList.remove("title-up");
      title.classList.remove("is-1");
      sidebar.classList.remove("hidden");
      username.classList.remove("hidden");
      profile.classList.remove("hidden");
      main.classList.add("main", "fade-in");
      title.classList.add("is-3");
      sidebar.classList.add("fade-in");
      username.classList.add("fade-in");
      profile.classList.add("fade-in");
      subtitle.remove();
      staggeredAnimationClass(sidebarButtons, "fade-in-bottom", "hidden", 200);
    }, 1200);
  }, 3000);
})();

function toggleProfileBox() {
  const profileFormContent = `
    <form novalidate id="profile-form">
      <div class="field">
        <label for="username-input" class="label">Username</label>
        <input id="username-input" type="text" class="input" placeholder="Enter your pishock username" />
      </div>
      <div class="field">
        <label for="apikey-input" class="label">API Key</label>
        <input id="apikey-input" type="apikey" class="input" placeholder="Enter your pishock api key" />
      </div>
    </form>`;
  const profileBox = document.getElementById("profile-box");
  const profileForm = document.getElementById("profile-form");
  if (!profileForm) {
    profileBox.style.display = "block";
    profileBox.innerHTML = profileFormContent;
    const usernameInput = document.getElementById("username-input");
    const apikeyInput = document.getElementById("apikey-input");
    usernameInput.focus();
  } else {
    profileBox.style.display = "none";
    profileBox.innerHTML = "";
  }
}

function togglePartnerBox() {
  const partnerFormContent = `
    <form novalidate id="partner-form">
      <div class="field">
        <label for="partner-name-input" class="label">Name</label>
        <input id="partner-name-input" type="text" class="input" placeholder="Enter partner name" />
      </div>
    </form>`;
  const partnerBox = document.getElementById("partner-box");
  const partnerForm = document.getElementById("partner-form");
  if (!partnerForm) {
    partnerBox.style.display = "block";
    partnerBox.innerHTML = partnerFormContent;
    const partnerNameInput = document.getElementById("partner-name-input");
    partnerNameInput.focus();
  } else {
    partnerBox.style.display = "none";
    partnerBox.innerHTML = "";
  }
}
