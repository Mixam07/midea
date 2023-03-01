import { NavLink } from "react-router-dom";
import logo from "../../assets/icons/logo.svg";
import telegram from "../../assets/icons/social_network/telegram.svg";
import facebook from "../../assets/icons/social_network/facebook.svg";
import instagram from "../../assets/icons/social_network/instagram.svg";
import youtube from "../../assets/icons/social_network/youtube.svg";

import Container from "../common/Container/Container";
import s from "./Footer.module.css";

const Footer = (props) => {
    return(
        <footer className={s.footer}>
            <Container>
                <div className={s.wrapper}>
                    <div className={s.info}>
                        <NavLink to="/" className={s.logo}>
                            <img src={logo} alt="logo" />
                        </NavLink>
                        <div className={s.desc}>Страница официального представителя Midea в Узбекистане</div>
                    </div>
                    <div className={s.item}>
                        <h2 className={s.title}>Адрес</h2>
                        <div className={s.address}>15 Амир Темур шоҳ кўчаси, Tashkent 100000</div>
                    </div>
                    <div className={s.item}>
                        <h2 className={s.title}>Номер телефона</h2>
                        <a href="tel:+998977000708" className={s.phone}>+998 97 700 0708</a>
                    </div>
                    <div className={s.social}>
                        <a href="#">
                            <img src={instagram} alt="instagram" />
                        </a>
                        <a href="#">
                            <img src={telegram} alt="telegram" />
                        </a>
                        <a href="#">
                            <img src={youtube} alt="youtube" />
                        </a>
                        <a href="#">
                            <img src={facebook} alt="facebook" />
                        </a>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer;