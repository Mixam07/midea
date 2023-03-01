import telegram from "../../assets/icons/social_network/telegram.svg";
import facebook from "../../assets/icons/social_network/facebook.svg";
import instagram from "../../assets/icons/social_network/instagram.svg";
import youtube from "../../assets/icons/social_network/youtube.svg";

import Container from "../common/Container/Container";
import s from "./Contacts.module.css";

const Contacts = (props) => {
    return(
        <section className={s.contacts}>
            <Container>
                <div className={s.wrapper}>
                    <div className={s.elem}>
                        <h2 className={s.title}>Выбор языка</h2>
                        <div className={s.items}>
                            <div className={s.item}>
                                <input className={s.input} id="ru" type="radio" value="ru" name="languages" />
                                <label className={s.label} htmlFor="ru">
                                    <div className={s.circle}></div> 
                                    <div className={s.text}>Рус</div>
                                </label>
                            </div>
                            <div className={s.item}>
                                <input className={s.input} id="ua" type="radio" value="ua" name="languages" />
                                <label className={s.label} htmlFor="ua">
                                    <div className={s.circle}></div> 
                                    <div className={s.text}>Укр</div>
                                </label>
                            </div>
                            <div className={s.item}>
                                <input className={s.input} id="en" type="radio" value="en" name="languages" />
                                <label className={s.label} htmlFor="en">
                                    <div className={s.circle}></div> 
                                    <div className={s.text}>Eng</div>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className={s.elem}>
                        <h2 className={s.title}>Название магазина</h2>
                        <h3 className={s.name}>oshxonabuyumiuz</h3>
                        <h4 className={s.desc}>Покупайте дешевые и надежные товары у нас. Не заблудитесь в выборе!</h4>
                    </div>
                    <div className={s.elem}>
                        <h2 className={s.title}>Номер телефона</h2>
                        <a className={s.phone} href="tel:+998977000708">+998 97 700 0708</a>
                    </div>
                    <div className={s.elem}>
                        <h2 className={s.title}>Адрес</h2>
                        <div className={s.address}>15 Амир Темур шоҳ кўчаси, Tashkent 100000</div>
                    </div>
                    <div className={s.elem}>
                        <h2 className={s.title}>Социальные сети</h2>
                        <div className={s.list}>
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
                </div>
            </Container>
        </section>
    )
}

export default Contacts;