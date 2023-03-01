import empty from "../../assets/img/empty-favourite.png";
import arrow from "../../assets/icons/arrow/arrow_bottom.svg";

import Container from "../common/Container/Container";
import Information from "../Information/Information";
import Navigation from "../Navigation/Navigation";
import { NavLink } from "react-router-dom";
import s from "./Favourite.module.css";
import { useState } from "react";
import classNames from "classnames";
import CardContainer from "../Card/CardContainer";

const Favourite = (props) => {
    const goods = props.goods.map((item, i) => <CardContainer key={i + 1} {...item} />);
    const [isActive, setActive] = useState(false);
    const [sort, setSort] = useState("Популярные");
    return(
        <>
            <Navigation list={[
                {
                    text: "Главная",
                    href: ""
                },
                {
                    text: "Избранное",
                    href: "favourite"
                }
            ]} />
            <section className={s.basket}>
                <Container>
                    {
                        props.goods.length != 0 ?
                        <>
                            <div className={s.info}>
                                <h1 className={s.heading}>Избранное</h1>
                                <div className={s.sort}>
                                    <div className={s.caption}>Сортировка</div>
                                    <div className={s.wrapper}>
                                        <button onClick={ () => { setActive(!isActive) } } className={s.btn}>
                                            <div className={s.text}>{sort}</div>
                                            <img className={s.img} src={arrow} alt="arrow" />
                                        </button>
                                        <ul className={classNames(s.items, {[s.active]: isActive})}>
                                            <li>
                                                <button onClick={ () => {setSort("Популярные")} } className={classNames(s.item, {[s.active]: sort === "Популярные"})}>Популярные</button>
                                            </li>
                                            <li>
                                                <button onClick={ () => {setSort("Подешевле")} } className={classNames(s.item, {[s.active]: sort === "Подешевле"})}>Подешевле</button>
                                            </li>
                                            <li>
                                                <button onClick={ () => {setSort("Подороже")} } className={classNames(s.item, {[s.active]: sort === "Подороже"})}>Подороже</button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className={s.list}>{goods}</div>
                        </>:
                        <>
                            <h1 className={s.heading}>Избранное</h1>
                            <div className={s.wrap}>
                                <div>
                                    <img src={empty} alt="empty" />
                                </div>
                                <div className={s.desc}>
                                    <h2 className={s.title}>Добавьте то, что понравилось</h2>
                                    <h3 className={s.subtitle}>Нажмите на ♡ в товаре. Войдите в аккаунт и всё избранное сохранится</h3>
                                </div>
                                <NavLink to="/" className={s.button}>На главную</NavLink>
                            </div>
                        </>
                    }
                </Container>
            </section>
            {props.goods.length != 0 && <Information />}
        </>
    )
}

export default Favourite;