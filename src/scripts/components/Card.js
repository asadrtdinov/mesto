export class Card {
  constructor(card, templateSelector, onCardClick, userId, onRemoveButtonClick) {
    this._card = card;
    this._templateSelector = templateSelector;
    this._onCardClick = onCardClick;
    this._userId = userId;
    this._onRemoveButtonClick = onRemoveButtonClick;

    this._onRemoveButtonClick = this._onRemoveButtonClick.bind(this);
    this._removeButtonHandler = this._removeButtonHandler.bind(this);
  }



  generateCard() {
    this._getTemplate();

    this._element = this._getTemplate();
    this._elementImage = this._element.querySelector('.element__image');
    this._elementTitle = this._element.querySelector('.element__title');
    this._removeButton = this._element.querySelector('.element__remove-button');
    this._likeButton = this._element.querySelector('.element__like-button');
    this._likeCounter = this._element.querySelector('.element__like-counter');

    this._setEventListeners();

    this._elementTitle.textContent = this._card.name;
    this._elementImage.src = this._card.link;
    this._elementImage.alt = this._card.name;
    this._likeCounter.textContent = this._card.likes.length;
    this._elementId = this._card._id;

    this._userId.then(data => {
      if (!(data === this._card.owner._id)) {
        this._removeButton.style.display = "none";
      }
    });

    return this._element;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);
    return cardElement;
  }

  _setEventListeners() {
    this._removeButton.addEventListener('click', this._removeButtonHandler);
    this._likeButton.addEventListener('click', this._toggleLike);

    this._elementImage.addEventListener('click', this._onCardClick);
  }

  _toggleLike = (evt) => {
    evt.target.classList.toggle('element__like-button_active');
  }

  _removeButtonHandler(evt) {
    this._onRemoveButtonClick(evt.target.closest('.element'), this._elementId);
  }
};
