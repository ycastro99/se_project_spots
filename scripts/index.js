const editProfileButton = document.querySelector(".profile__edit-button");
const addPostButton = document.querySelector(".profile__new-post-button");
const editProfileModal = document.querySelector("#edit-profile-modal");
const newPostModal = document.querySelector("#new-post-modal");
const closeButtons = document.querySelectorAll(".modal__close-button");

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
