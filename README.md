# Tripleten web_project_around_es

https://gustavoskg.github.io/web_project_around_es/

## Welcome to the project Around the US, an interactive page where users can upload, delete and like photos.  

## Around The U.S. — Interactive Web Project

Around The U.S. is an interactive web application that allows users to handle cards from turistic places, profile editing and display images. The project is built with HTML5, CSS3 and JavaScript, implementing good structure practices, DOM manipulation and events.

## Project Description

Imagine a digital space where you can explore iconic landscapes, edit your profile and add new places to your collection, all within a minimal visual experience, clear and adaptable to any device. This project not only functions as a card galley, also as a practical demonstration of DOM manipulation, templates implementation and events.

## What You'll Find Here

-Editable profile: An edit button opens a modal that allows changing the user's name and description     ("Explorer").

-Card gallery: Six initial cards (initialCards) rendered dynamically from JavaScript, each with an image, title, "like" button, and delete button.

-New place: An "Add card" button opens a modal with a form to create new cards with a title and image link.

-Image modal: Clicking any image opens a popup with the enlarged image and its title as a caption.

-Like button: Toggles the visual state via the card__like-button_is-active class.

-Delete card: Each card can be individually removed from the DOM.

-HTML templates: Uses <template id="cardTemplate"> to efficiently clone the card structure.

## Technical Features

-JavaScript organized by functionality (profile, cards, image)

-DOM manipulation with querySelector, cloneNode, prepend, remove.

-Event handling with addEventListener for clicks and form submissions.

-Template cloning to avoid duplicating HTML for cards.

-Reusable modals via openModal() and closeModal() functions.

-Controlled forms with preventDefault() and reset() after submission.

-Section-based organization: variables grouped by block (profile, cards, image) for readability and maintainability.

## How It Was Built

Prebuilt base structure in HTML with a header, a main containing the profile and cards, a footer, and three popups (edit profile, new place, image).

Defined a <template> for cards, with image, title, and action buttons.

Declared the initialCards array with six places and their image URLs.

Selected the necessary DOM elements using querySelector.

Implemented openModal() and closeModal() functions to handle popup visibility.

Implemented the profile edit flow: open modal → fill form with current data → save changes → close modal.

Implemented the card creation flow: clone template → set src, alt, and textContent → add listeners → insert with prepend.

Added listeners for like, delete, and open enlarged image.

Connected the main buttons (edit profile, add card) and each modal's close buttons.

Initialized the gallery by iterating over initialCards with forEach and calling renderCard().

## Main Technologies

HTML5

CSS3 (pages/index.css file)

JavaScript (ES6+)

DOM API (querySelector, template, cloneNode, prepend, remove)

Events and forms (addEventListener, preventDefault, reset)

## Why This Project Is Different

Although it's a simple gallery, Around The U.S. is built with clear, modular logic: each code block is dedicated to a specific functionality (profile, cards, image), making it easy to read and extend. It also uses HTML templates, which avoids duplicating structure and improves performance, and employs reusable modals that can scale to new features. It's an excellent starting point for more complex projects requiring data persistence, API integration, or modern frameworks