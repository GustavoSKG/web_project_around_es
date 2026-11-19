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
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");    
// Add new cards
const addNewCardModal = document.querySelector("#new-card-popup");
const popupCardCloseButton = addNewCardModal.querySelector(".popup__close");
const cardsTemplate = document.querySelector("#cardTemplate").content.querySelector(".card");
const cardsContainer = document.querySelector(".cards__list");
const cardTitle = cardsTemplate.querySelector(".card__title");
const cardImageUrl = cardsTemplate.querySelector(".card__image");
//Image pop up
const openImageModal = document.querySelector("#image-popup");
const closeImageModalButton = openImageModal.querySelector(".popup__close");
const imageCaptionPopup = openImageModal.querySelector(".popup__caption");
const imageDisplayPopup = openImageModal.querySelector(".popup__image");
// input profile
let nameInput = editPopUpModal.querySelector(".popup__input_type_name");
let jobInput = editPopUpModal.querySelector(".popup__input_type_description");
let formElement = editPopUpModal.querySelector("#edit-profile-form");
//input new cards
let cardNameInput = addNewCardModal.querySelector(".popup__input_type_card-name");
let cardImageUrlInput = addNewCardModal.querySelector(".popup__input_type_url");
let cardFormElement = addNewCardModal.querySelector("#new-card-form");

//Popup functions

function openModal(popup){   
    popup.classList.add("popup_is-opened");
};

function closeModal(popup){
    popup.classList.remove("popup_is-opened");
};

//Profile Edit Functions

function fillProfileForm(){
    
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileDescription.textContent;
};

function handleOpenEditModal(evt){
    evt.preventDefault();
    fillProfileForm();
    openModal(editPopUpModal);
};

function handleProfileFormSubmit(evt){
    evt.preventDefault();
    const nameValue = nameInput.value;
    const jobValue = jobInput.value;
    profileTitle.textContent = nameValue,
    profileDescription.textContent = jobValue;
    closeModal(editPopUpModal);
    evt.target.reset();
};

profileEditButton.addEventListener("click", handleOpenEditModal);
popupCloseButton.addEventListener("click", () => closeModal(editPopUpModal));
formElement.addEventListener('submit', handleProfileFormSubmit);

//Add New Card Functions

function getCardElement(name = "Sin título", link = "./images/placeholder.jpg"){
    const cardElement = cardsTemplate.cloneNode(true);
    const cardTitle = cardElement.querySelector(".card__title");
    const cardImage = cardElement.querySelector(".card__image");
    const cardLikeButton = cardElement.querySelector(".card__like-button");
    const cardDeleteButton = cardElement.querySelector(".card__delete-button");
    cardImage.src = link;
    cardImage.alt = name;
    cardTitle.textContent = name;        
    cardLikeButton.addEventListener("click", () => {
        cardLikeButton.classList.toggle("card__like-button_is-active");
    });
    cardDeleteButton.addEventListener("click", () => {
        cardElement.remove();
    });
    cardImage.addEventListener("click", () => {
        imageCaptionPopup.textContent = name;
        imageDisplayPopup.src = link;
        imageDisplayPopup.alt = name;
        openModal(openImageModal);
    });
    return cardElement;
};

function renderCard(name, link, container){
    const cardElement = getCardElement(name, link);
    container.prepend(cardElement);
    }; 

initialCards.forEach((card) => {
    renderCard(card.name, card.link, cardsContainer);
});

function fillCardForm(){
    cardNameInput.value = cardTitle.textContent;
    cardImageUrlInput.value = cardImageUrl.textContent;
};

function handleAddCardModal(evt){
    evt.preventDefault();
    fillCardForm();
    openModal(addNewCardModal);
};

function handleCardFormSubmit(evt) {
    evt.preventDefault();
    const nameValue = cardNameInput.value;
    const linkValue = cardImageUrlInput.value;   
    renderCard(nameValue, linkValue, cardsContainer);
    closeModal(addNewCardModal);
    evt.target.reset(); 
};


closeImageModalButton.addEventListener("click", () => closeModal(openImageModal));
profileAddCardButton.addEventListener("click", handleAddCardModal);
popupCardCloseButton.addEventListener("click", () => closeModal(addNewCardModal));
cardFormElement.addEventListener('submit', handleCardFormSubmit);

