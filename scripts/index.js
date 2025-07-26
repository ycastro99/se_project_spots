const editProfileButton = document.querySelector(".profile__edit-button");
const addPostButton = document.querySelector(".profile__new-post-button");
const editProfileModal = document.querySelector("#edit-profile-modal");
const newPostModal = document.querySelector("#new-post-modal");
const closeButtons = document.querySelectorAll(".modal__close-button");
const editProfileForm = editProfileModal.querySelector(".modal__form");
const editProfileNameInput = document.querySelector("#profile-name-input");
const editProfileDescriptionInput = document.querySelector(
  "#profile-description-input"
);

const profileNameEl = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__bio");

editProfileButton.addEventListener("click", () => {
  editProfileModal.classList.add("modal_is-opened");
});

addPostButton.addEventListener("click", () => {
  newPostModal.classList.add("modal_is-opened");
});

closeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    if (modal) {
      modal.classList.remove("modal_is-opened");
    }
  });
});

function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  profileNameEl.textContent = editProfileNameInput.value;
  profileDescriptionEl.textContent = editProfileDescriptionInput.value;
  editProfileModal.classList.remove("modal_is-opened");
}

editProfileForm.addEventListener("submit", handleEditProfileSubmit);
