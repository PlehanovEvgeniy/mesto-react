import React from 'react';
import delete_svg from "../images/delete.svg";
import like_svg from "../images/like.svg";

export const Card = ({card, onCardClick}) => {

    const handleClick = () => {
        onCardClick(card);
    }

    return(
        <li className="element">
            <button type="button" className="element__delete">
                <img className="element__delete-image" src={delete_svg} alt="Кнопка удалить" />
            </button>
            <img className="element__image" src={card.link} alt="Карачаево-Черкесск" onClick={handleClick}/>
            <div className="element__description">
                <h2 className="element__text">{card.name}</h2>
                <div className="element__like-conteiner">
                    <button type="button" className="element__button">
                        <img className="element__like" src={like_svg} alt="Лайк" />
                    </button>
                    <span className="element__like-count">{card.likes.length}</span>
                </div>
            </div>
        </li>
    );
}