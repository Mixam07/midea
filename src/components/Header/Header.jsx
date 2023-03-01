import logo from "../../assets/icons/logo.svg";
import menu from "../../assets/icons/menu.svg";
import search from "../../assets/icons/search.svg";
import bag from "../../assets/icons/bag.svg";
import heart from "../../assets/icons/heart.svg";
import arrow from "../../assets/icons/arrow/arrow_bottom.svg";
import close from "../../assets/icons/close.svg";

import { Transition } from 'react-transition-group';
import Container from "../common/Container/Container";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";
import classNames from "classnames";

const Header = (props) => {
    const toggle = props.typePopup === "catalog";
    
    const onClick = () => {
        if(props.typePopup !== "catalog") return props.setTypePopup("catalog")
        return props.setTypePopup("")
    }

    return(
        <header className={s.header}>
            <Container>
                <div className={s.wrapper}>
                    <div className={s.info}>
                        <NavLink className={s.logo} to="/">
                            <img src={logo} slt="logo" />
                        </NavLink>
                        <button onClick={onClick} className={s.button}>
                            <Transition in={toggle} timeout={1000}>
                                {state => (
                                    <div className={classNames(s.image, s[state])}>
                                        <span className={s.menu}><img src={menu} alt="menu" /></span>
                                        <span className={s.close}><img src={close} alt="close" /></span>
                                    </div>
                                )}
                            </Transition>
                            <div className={s.text}>Каталог</div>
                        </button>
                        <div className={s.search}>
                            <input className={s.input} type="text" id="search" placeholder="Поиск" />
                            <label className={s.label} htmlFor="search">
                                <img src={search} alt="search" />
                            </label>
                        </div>
                    </div>
                    <div className={s.nav}>
                        <NavLink to="/basket" className={s.item}>
                            <div className={s.img}>
                                <img src={bag} alt="bag" />
                                {props.number != 0 && <div className={s.number}>{props.number}</div>}
                            </div>
                            <div className={s.title}>Корзина</div>
                        </NavLink>
                        <NavLink to="/favourite" className={s.item}>
                            <div className={s.img}>
                                <img src={heart} alt="heart" />
                            </div>
                            <div className={s.title}>Избранное</div>
                        </NavLink>
                        <button className={s.btn}>
                            <div className={s.desc}>Рус</div>
                            <img src={arrow} alt="arrow" />
                        </button>
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header;