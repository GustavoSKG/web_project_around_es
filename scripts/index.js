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
const profileAddCardButton = document.querySelector(".profile__add-button");
const addNewCardModal = document.querySelector("#new-card-popup");
const popupCardcloseButton = addNewCardModal.querySelector(".popup__close");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");    
const cardsTemplate = document.querySelector("#cardTemplate").content.querySelector(".card");
const cardsContainer = document.querySelector(".cards__list");
const cardTitle = cardsTemplate.querySelector(".card__title");
const cardImageUrl = cardsTemplate.querySelector(".card__image");
let nameInput = editPopUpModal.querySelector(".popup__input_type_name");
let jobInput = editPopUpModal.querySelector(".popup__input_type_description");
let formElement = editPopUpModal.querySelector("#edit-profile-form");
let cardNameInput = addNewCardModal.querySelector(".popup__input_type_card-name");
let cardImageUrlInput = addNewCardModal.querySelector(".popup__input_type_url");
let cardFormElement = addNewCardModal.querySelector("#new-card-form");

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

function getCardElement(name = "Sin título", link = "./images/placeholder.jpg"){
    const cardElement = cardsTemplate.cloneNode(true);
    const cardTitle = cardElement.querySelector(".card__title");
    const cardImage = cardElement.querySelector(".card__image");
    cardImage.src = link;
    cardImage.alt = name;
    cardTitle.textContent = name;         
    return cardElement;

};

function renderCard(name, link, container){
    const cardElement = getCardElement(name, link);
    container.prepend(cardElement);
    }; 

initialCards.forEach((card) => {
    renderCard(card.name, card.link, cardsContainer);
});

function openCardModal(){
    addNewCardModal.classList.add("popup_is-opened");
};

function closeCardModal(){
    addNewCardModal.classList.remove("popup_is-opened");
};

profileAddCardButton.addEventListener("click", handleAddCardModal);
popupCardcloseButton.addEventListener("click", closeCardModal);

function fillCardForm(){
    cardNameInput.value = cardTitle.textContent;
    cardImageUrlInput.value = cardImageUrl.textContent;
};

function handleAddCardModal(evt){
    evt.preventDefault();
    fillCardForm();
    openCardModal();
};

function handleCardFormSubmit(evt) {
    evt.preventDefault();
    const nameValue = cardNameInput.value;
    const linkValue = cardImageUrlInput.value;   
    cardTitle.textContent = nameValue;
    cardImageUrl.textContent = linkValue;
    closeCardModal();
    evt.target.reset(); 
};

cardFormElement.addEventListener('submit', handleCardFormSubmit);