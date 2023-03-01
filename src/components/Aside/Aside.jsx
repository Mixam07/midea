import Container from "../common/Container/Container";
import s from "./Aside.module.css";
import { NavLink } from "react-router-dom";
import classNames from "classnames";

const Aside = (props) => {
    const toggle = props.typePopup === "catalog";
    
    const onClick = () => {
        if(props.typePopup !== "catalog") return props.setTypePopup("catalog")
        return props.setTypePopup("")
    }

    return(
        <aside className={classNames(s.aside, {[s.good]: props.isGoodPage})}>
            <Container>
                {props.isBuyPage && 
                <div className={s.info}>
                    <div className={s.wrap}>
                        <div className={s.text}>Выбрано: {props.numberActive} шт</div>
                        <div className={s.cost}>{props.cost}</div>
                    </div>
                    <button className={classNames(s.button, {[s.unActive]: props.isGoodInBuy})}>Купить</button>
                </div>}
                <div className={s.wrapper}>
                    <NavLink className={({ isActive }) => isActive ? classNames(s.item, s.active) : s.item} to="/">
                        <div className={s.img}>
                            <svg className={s.icon} style={{fill: "none"}} width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.02 2.84004L3.63 7.04004C2.73 7.74004 2 9.23004 2 10.36V17.77C2 20.09 3.89 21.99 6.21 21.99H17.79C20.11 21.99 22 20.09 22 17.78V10.5C22 9.29004 21.19 7.74004 20.2 7.05004L14.02 2.72004C12.62 1.74004 10.37 1.79004 9.02 2.84004Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12 17.99V14.99" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div className={s.title}>Главная</div>
                    </NavLink>
                    <button onClick={onClick} className={classNames(s.item, {[s.active]: toggle})}>
                        <div className={s.img}>
                            <svg className={s.icon} width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 7H21" stroke-width="1.5" stroke-linecap="round"/>
                                <path d="M3 12H21" stroke-width="1.5" stroke-linecap="round"/>
                                <path d="M3 17H21" stroke-width="1.5" stroke-linecap="round"/>
                            </svg>
                        </div>
                        <div className={s.title}>Каталог</div>
                    </button>
                    {!props.isGoodPage && 
                    <NavLink className={({ isActive }) => isActive ? classNames(s.item, s.active) : s.item} to="/basket">
                        <div className={s.img}>
                            <svg className={s.icon} width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 18.5C9.66 18.5 7.75 16.59 7.75 14.25C7.75 13.84 8.09 13.5 8.5 13.5C8.91 13.5 9.25 13.84 9.25 14.25C9.25 15.77 10.48 17 12 17C13.52 17 14.75 15.77 14.75 14.25C14.75 13.84 15.09 13.5 15.5 13.5C15.91 13.5 16.25 13.84 16.25 14.25C16.25 16.59 14.34 18.5 12 18.5Z"/>
                                <path d="M5.18988 6.37994C4.99988 6.37994 4.79988 6.29994 4.65988 6.15994C4.36988 5.86994 4.36988 5.38994 4.65988 5.09994L8.28988 1.46994C8.57988 1.17994 9.05988 1.17994 9.34988 1.46994C9.63988 1.75994 9.63988 2.23994 9.34988 2.52994L5.71988 6.15994C5.56988 6.29994 5.37988 6.37994 5.18988 6.37994Z"/>
                                <path d="M18.8101 6.37994C18.6201 6.37994 18.4301 6.30994 18.2801 6.15994L14.6501 2.52994C14.3601 2.23994 14.3601 1.75994 14.6501 1.46994C14.9401 1.17994 15.4201 1.17994 15.7101 1.46994L19.3401 5.09994C19.6301 5.38994 19.6301 5.86994 19.3401 6.15994C19.2001 6.29994 19.0001 6.37994 18.8101 6.37994Z"/>
                                <path d="M20.21 10.6C20.14 10.6 20.07 10.6 20 10.6H19.77H4C3.3 10.61 2.5 10.61 1.92 10.03C1.46 9.57998 1.25 8.87998 1.25 7.84998C1.25 5.09998 3.26 5.09998 4.22 5.09998H19.78C20.74 5.09998 22.75 5.09998 22.75 7.84998C22.75 8.88998 22.54 9.57998 22.08 10.03C21.56 10.55 20.86 10.6 20.21 10.6ZM4.22 9.09998H20.01C20.46 9.10998 20.88 9.10998 21.02 8.96998C21.09 8.89998 21.24 8.65998 21.24 7.84998C21.24 6.71998 20.96 6.59998 19.77 6.59998H4.22C3.03 6.59998 2.75 6.71998 2.75 7.84998C2.75 8.65998 2.91 8.89998 2.97 8.96998C3.11 9.09998 3.54 9.09998 3.98 9.09998H4.22Z"/>
                                <path d="M14.8898 22.75H8.85975C5.27975 22.75 4.47975 20.62 4.16975 18.77L2.75975 10.12C2.68975 9.71 2.96975 9.33 3.37975 9.26C3.77975 9.19 4.16975 9.47 4.23975 9.88L5.64975 18.52C5.93975 20.29 6.53975 21.25 8.85975 21.25H14.8898C17.4598 21.25 17.7498 20.35 18.0798 18.61L19.7598 9.86C19.8398 9.45 20.2298 9.18 20.6398 9.27C21.0498 9.35 21.3098 9.74 21.2298 10.15L19.5498 18.9C19.1598 20.93 18.5098 22.75 14.8898 22.75Z"/>
                            </svg>
                            <div className={s.number}>2</div>
                        </div>
                        <div className={s.title}>Корзина</div>
                    </NavLink>}
                    <NavLink className={({ isActive }) => isActive ? classNames(s.item, s.active, s.favourite): classNames(s.item, s.favourite)} to="/favourite">
                        <div className={s.img}>
                            <svg className={s.icon} style={{fill: "none"}} width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.62 20.8116C12.28 20.9316 11.72 20.9316 11.38 20.8116C8.48 19.8216 2 15.6916 2 8.69156C2 5.60156 4.49 3.10156 7.56 3.10156C9.38 3.10156 10.99 3.98156 12 5.34156C13.01 3.98156 14.63 3.10156 16.44 3.10156C19.51 3.10156 22 5.60156 22 8.69156C22 15.6916 15.52 19.8216 12.62 20.8116Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div className={s.title}>Избранное</div>
                    </NavLink>
                    <NavLink className={({ isActive }) => isActive ? classNames(s.item, s.active, s.contacts) : classNames(s.item, s.contacts)} to="/contacts">
                        <div className={s.img}>
                            <svg className={s.icon} style={{fill: "none"}} width="25" height="24" viewBox="0 0 25 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.5 22C18.0228 22 22.5 17.5228 22.5 12C22.5 6.47715 18.0228 2 12.5 2C6.97715 2 2.5 6.47715 2.5 12C2.5 17.5228 6.97715 22 12.5 22Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M8.49961 3H9.49961C7.54961 8.84 7.54961 15.16 9.49961 21H8.49961" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M15.5 3C17.45 8.84 17.45 15.16 15.5 21" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M3.5 16V15C9.34 16.95 15.66 16.95 21.5 15V16" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M3.5 9.00001C9.34 7.05001 15.66 7.05001 21.5 9.00001" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div className={s.title}>Контакты</div>
                    </NavLink>
                    {props.isGoodPage &&
                    <div className={s.btns}>
                        <button className={s.btn}>В корзину</button>
                        <button className={s.btn}>Купить</button>
                    </div>}
                </div>
            </Container>
        </aside>
    )
}

export default Aside;