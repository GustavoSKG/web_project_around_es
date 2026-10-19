const initialCards = [
    {
        name: "Valle de Yosemite",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg"
    },

    {
        name: "Lago Louise",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg"
    },

    {
        name: "Montañas Calvas",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg"
    },

    {
        name: "Latemar",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg"
    },

    {
        name: "Parque Nacional de la Vanoise" ,
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg"

    },

    {
        name: "Lago di Braies",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg"
    },
];


initialCards.forEach(function(card){
    console.log(card);
});

const profileEditButton = document.querySelector(".profile__edit-button");
const editPopUpModal = document.querySelector("#edit-popup");
const popupCloseButton = editPopUpModal.querySelector(".popup__close");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");    
let nameInput = editPopUpModal.querySelector(".popup__input_type_name");
let jobInput = editPopUpModal.querySelector(".popup__input_type_description");
let formElement = editPopUpModal.querySelector("#edit-profile-form");

function openModal(){   
    editPopUpModal.classList.add("popup_is-opened");
};

function closeModal(){
    editPopUpModal.classList.remove("popup_is-opened");
};

profileEditButton.addEventListener("click", handleOpenEditModal);
popupCloseButton.addEventListener("click", closeModal);

function fillProfileForm(){
    
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileDescription.textContent;
};

function handleOpenEditModal(evt){
    evt.preventDefault();
    fillProfileForm();
    openModal();
};

function handleProfileFormSubmit(evt){
    evt.preventDefault();
    const nameValue = nameInput.value;
    const jobValue = jobInput.value;

    profileTitle.textContent = nameValue,
    profileDescription.textContent = jobValue;

    closeModal();

    evt.target.reset();
};

formElement.addEventListener('submit', handleProfileFormSubmit);