import React from 'react';

export const PopupWithForm = ({title, name, children, isOpen, textBtn, onClose}) => {

    let popupIsVisible = isOpen ? 'popup_opened' : '';

    return(
        <section className={`popup popup_${name} ${popupIsVisible}`}>
            <div className="popup__container">
                <form className={`form form_${name}`}>
                    <h2 className="form__title">{title}</h2>
                    {children}
                    <button className="button button_type_save" type="submit">{textBtn}</button>
                    <button className="button button_type_close" type="button" aria-label="Закрыть" onClick={onClose}/>
                </form>
            </div>
        </section>
    );
}
