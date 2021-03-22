import React, {useState, useEffect} from 'react';
import {api} from "../utils/api";
import edit_button_img from "../images/Edit_button.svg";
import profile_img from "../images/profile.jpg";
import add_button_img from "../images/Add_Button-vector.svg";
import {Card} from "./Card";


export const Main = ({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) => {

    const [userName, setUserName] = useState("Жак-Ив Кусто");
    const [userDescription, setUserDescription] = useState("Исследователь океана");
    const [userAvatar, setUserAvatar] = useState(profile_img);
    const [cards, setCards] = useState([]);

    useEffect(() => {
        api.getProfile()
            .then ((data) => {
                setUserName(data.name);
                setUserDescription(data.about);
                setUserAvatar(data.avatar);
            })
            .catch((err) => {console.log(err)});

        api.getCards()
            .then((data) => {
                setCards([...data]);
            })
            .catch((err) => {console.log(err)});
    }, [])

    return (
    <main className="main">
        <section className="profile">
            <button type="button" className="profile__avatar-button" onClick={onEditAvatar}>
                <div className="profile__avatar-edit-button-container">
                    <img className="profile__avatar-edit-button" src={edit_button_img} alt="Кнопка Редактировать"/>
                </div>
                <img className="profile__avatar" src={userAvatar} alt="Фото пользователя" />
            </button>
            <div className="profile__info">
                <h1 id="name" className="profile__title">{userName}</h1>
                <button type="button" className="profile__edit-button" onClick={onEditProfile}>
                    <img className="profile__edit-button-image" src={edit_button_img} alt="Кнопка редактировать" />
                </button>
                <p id="prof" className="profile__subtitle">{userDescription}</p>
            </div>
            <button type="button" className="profile__add-button" onClick={onAddPlace}>
                <img className="profile__add-button-image" src={add_button_img} alt="Кнопка добавить" />
            </button>
        </section>
        <section className="elements">
            <ul className="elements__container">
                {cards.map((card, index) => {
                    return <Card
                        key={index}
                        card={card}
                        onCardClick={onCardClick}
                    />
                })}
            </ul>
        </section>
    </main>
    )
}