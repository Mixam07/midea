import heart from "../../assets/icons/heart.svg";
import heart_active from "../../assets/icons/heart-active.svg";
import bag from "../../assets/icons/bag.svg";
import bag_active from "../../assets/icons/bag-active.svg";

import { NavLink } from "react-router-dom";
import s from "./Card.module.css";
import classNames from "classnames";

const Card = (props) => {
    const path = `/good/${props.id}`;
    return(
        <div className={classNames(s.item, {[s.mini]: props.isMini})}>
            <NavLink to={path} className={s.img}>
                <img src={props.img} alt="photo" />
            </NavLink>
            <div className={s.info}>
                <NavLink to={path} className={s.title}>{props.title}</NavLink>
                <div className={s.wrapper}>
                    <div className={s.cost}>{props.cost}</div>
                    <button onClick={ () => { props.setBuy(props.id) } } className={classNames(s.buy, {[s.active]: props.isBuy})}>
                        {props.isBuy ? <img src={bag_active} alt="heart" /> : <img src={bag} alt="heart" />}
                    </button>
                </div>
            </div>
            <button onClick={ () => { props.setFavourite(props.id) } } className={s.favourite}>
                {props.isFavourite ? <img src={heart_active} alt="heart" /> : <img src={heart} alt="heart" />}  
            </button>
        </div>
    )
}

export default Card;