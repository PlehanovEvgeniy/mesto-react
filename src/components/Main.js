import React from 'react';
import edit_button_img from "../images/Edit_button.svg";
import profile_img from "../images/profile.jpg";
import add_button_img from "../images/Add_Button-vector.svg";


export const Main = () => {
    return (
<main className="main">
    <section className="profile">
        <button type="button" className="profile__avatar-button">
            <div className="profile__avatar-edit-button-container">
                <img className="profile__avatar-edit-button" src={edit_button_img} alt="Кнопка Редактировать"/>
            </div>
            <img className="profile__avatar" src={profile_img} alt="Фото пользователя" />
        </button>
        <div className="profile__info">
            <h1 id="name" className="profile__title">Жак-Ив Кусто</h1>
            <button type="button" className="profile__edit-button">
                <img className="profile__edit-button-image" src={edit_button_img} alt="Кнопка редактировать" />
            </button>
            <p id="prof" className="profile__subtitle">Исследователь океана</p>
        </div>
        <button type="button" className="profile__add-button">
            <img className="profile__add-button-image" src={add_button_img} alt="Кнопка добавить" />
        </button>
    </section>
    <section className="elements">
        <ul className="elements__container">
        </ul>
    </section>
</main>
    )
}