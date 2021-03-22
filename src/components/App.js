import React, {useState} from 'react';
import {Header} from "./Header";
import {Main} from "./Main";
import {Footer} from "./Footer";
import {PopupWithForm} from "./PopupWithForm";
import {ImagePopup} from "./ImagePopup";


const App = () => {

    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);

    const handleEditAvatarClick = () => {
        setIsEditAvatarPopupOpen(true);
    }

    const handleEditProfileClick = () => {
        setIsEditProfilePopupOpen(true);
    }

    const handleAddPlaceClick = () => {
        setIsAddPlacePopupOpen(true);
    }

    const handleCardClick = (card) => {
        setSelectedCard(card);
    }

    const closeAllPopups = () => {
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setSelectedCard(null);
    }

        return (
        <div className="page">
            <Header/>
            <Main
                onAddPlace={handleAddPlaceClick}
                onEditAvatar={handleEditAvatarClick}
                onEditProfile={handleEditProfileClick}
                onCardClick={handleCardClick}
            />
            <Footer/>

            <PopupWithForm
                title={"Вы уверены?"}
                name={"delete-card"}
                textBtn={"Да"}
                isOpen={false}
                onClose={closeAllPopups}
            >
            </PopupWithForm>

            <PopupWithForm
                title={"Обновить аватар"}
                name={"avatar-image"}
                textBtn={"Сохранить"}
                isOpen={isEditAvatarPopupOpen}
                onClose={closeAllPopups}
            >
                <fieldset className="form__content form__avatar-info">
                    <input name="avatar" id="user-avatar" className="form__item form__item_type_card-name" placeholder="Ссылка на картинку" type="url" noValidate required />
                    <span id="user-avatar-error" className="form__item-error"/>
                </fieldset>
            </PopupWithForm>

            <PopupWithForm
                title={"Редактировать профиль"}
                name={"type_edit"}
                textBtn={"Сохранить"}
                isOpen={isEditProfilePopupOpen}
                onClose={closeAllPopups}
            >
                <fieldset className="form__content form__user-info">
                    <input className="form__item form__item_type_name" type="text" name="name" placeholder="Имя"
                           minLength="2" maxLength="40" id="user-name" noValidate required/>
                    <span id="user-name-error" className="form__item-error"/>
                    <input className="form__item form__item_type_job" type="text" name="prof"
                           placeholder="Вид деятельности" minLength="2" maxLength="200" id="user-job" noValidate
                           required/>
                    <span id="user-job-error" className="form__item-error"/>
                </fieldset>
            </PopupWithForm>

            <PopupWithForm
                title={"Новое место"}
                name={"type_add"}
                textBtn={"Создать"}
                isOpen={isAddPlacePopupOpen}
                onClose={closeAllPopups}
            >
                <fieldset className="form__content form__add-card">
                    <input className="form__item form__item_type_card-name" type="text" name="name"
                           placeholder="Название" minLength="2" maxLength="30" id="card-name" noValidate required/>
                    <span id="card-name-error" className="form__item-error"/>
                    <input className="form__item form__item_type_card-link" type="url" name="link"
                           placeholder="Ссылка на картинку" id="card-link" noValidate required/>
                    <span id="card-link-error" className="form__item-error"/>
                </fieldset>
            </PopupWithForm>

            <ImagePopup
                card={selectedCard}
                isOpen={selectedCard !== null}
                onClose={closeAllPopups}
            />
        </div>
    );
}

export default App;
