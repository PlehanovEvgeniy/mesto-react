import React from 'react';
import {Header} from "./Header"

function App() {
    return (
        <div className="page">
            <Header/>
            <main className="main">
        
                <section className="profile">
                    <button type="button" className="profile__avatar-button">
                        <div className="profile__avatar-edit-button-container">
                            <img className="profile__avatar-edit-button" src="<%=require('./images/Edit_button.svg')%>" alt="Кнопка Редактировать"/>
                        </div>
                        <img className="profile__avatar" src="<%=require('./images/profile.jpg')%>" alt="Фото пользователя" />
                    </button>
                    <div className="profile__info">
                        <h1 id="name" className="profile__title">Жак-Ив Кусто</h1>
                        <button type="button" className="profile__edit-button">
                            <img className="profile__edit-button-image" src="<%=require('./images/Edit_button.svg')%>" alt="Кнопка редактировать" />
                        </button>
                        <p id="prof" className="profile__subtitle">Исследователь океана</p>
                    </div>
                    <button type="button" className="profile__add-button">
                        <img className="profile__add-button-image" src="<%=require('./images/Add_Button-vector.svg')%>" alt="Кнопка добавить" />
                    </button>
                </section>
                <section className="elements">
                    <ul className="elements__container">
                    </ul>
                </section>

            </main>

            <footer className="footer">
                <p className="footer__copyright">&copy; 2020 Mesto Russia </p>
            </footer>

            <template id="card_template" className='default-card'>
                <li className="element">
                    <button type="button" className="element__delete">
                        <img className="element__delete-image" src="<%=require('./images/delete.svg')%>" alt="Кнопка удалить" />
                    </button>
                    <img className="element__image" src="<%=require('./images/karachaevsk.jpg')%>" alt="Карачаево-Черкесск" />
                        <div className="element__description">
                            <h2 className="element__text">Карачаево-Черкесск</h2>
                            <div className="element__like-conteiner">
                                <button type="button" className="element__button">
                                    <img className="element__like" src="<%=require('./images/like.svg')%>" alt="Лайк" />
                                </button>
                                <span className="element__like-count"/>
                            </div>
                        </div>
                </li>
            </template>

            <section className="popup popup_delete-card">
                <div className="popup__container">
                    <form name="card-deleted" className="form form_delete-card">
                        <h2 className="form__title">Вы уверены?</h2>
                        <button className="button button_type_save" type="submit">Да</button>
                        <button className="button button_type_close" type="button" aria-label="Закрыть"/>
                    </form>
                </div>
            </section>

            <section className="popup popup_avatar-image">
                <div className="popup__container">
                    <form name="profile-avatar-image" className='form form_avatar-image'>
                        <h2 className="form__title">Обновить аватар</h2>
                        <fieldset className="form__content form__avatar-info">
                            <input name="avatar" id="user-avatar" className="form__item form__item_type_card-name" placeholder="Ссылка на картинку" type="url" novalidate required />
                                <span id="user-avatar-error" className="form__item-error"/>
                        </fieldset>
                        <button className="button button_type_save" type="submit">Сохранить</button>
                        <button className="button button_type_close" type="button" aria-label="Закрыть"/>
                    </form>
                </div>
            </section>

            <section className="popup popup_type_edit">
                <div className="popup__container">
                    <form className="form form_type_edit" name="edit-form" >
                        <h2 className="form__title">Редактировать профиль</h2>
                        <fieldset className="form__content form__user-info">
                            <input className="form__item form__item_type_name" type="text" name="name" placeholder="Имя" minlength="2" maxlength="40" id="user-name"  novalidate required />
                            <span id="user-name-error" className="form__item-error"/>
                            <input className="form__item form__item_type_job" type="text" name="prof" placeholder="Вид деятельности" minlength="2" maxlength="200" id="user-job"  novalidate required />
                            <span id="user-job-error" className="form__item-error"/>
                        </fieldset>
                        <button className="button button_type_save" type="submit">Сохранить</button>
                    </form>
                    <button className="button button_type_close" type="button" aria-label="Закрыть"/>
                </div>
            </section>

            <section className="popup popup_type_add">
                <div className="popup__container popup__container_type_add">
                    <form className="form form_type_add" name="add-form" >
                        <h2 className="form__title">Новое место</h2>
                        <fieldset className="form__content form__add-card">
                            <input className="form__item form__item_type_card-name" type="text" name="name" placeholder="Название" minlength="2" maxlength="30" id="card-name"  novalidate required/>
                            <span id="card-name-error" className="form__item-error"/>
                            <input className="form__item form__item_type_card-link" type="url" name="link" placeholder="Ссылка на картинку" id="card-link"  novalidate required/>
                            <span id="card-link-error" className="form__item-error"/>
                        </fieldset>
                        <button className="button button_type_save" type="submit">Создать</button>
                    </form>
                    <button className="button button_type_close" type="button" aria-label="Закрыть"/>
                </div>
            </section>

            <div className="popup popup_type_image">
                <div className="popup__image-container">
                    <img className="popup__image" src="#" alt="#" />
                    <h3 className="popup__image-title">Для проверки</h3>
                    <button className="button button_type_close" type="button" aria-label="Закрыть"/>
                </div>
            </div>
        </div>
    );
}

export default App;
