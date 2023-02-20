import arrow from "../../assets/icons/arrow/arrow_bottom.svg";
import Aside from "./Aside/Aside";

import Container from "../common/Container/Container";
import Information from "../Information/Information";
import Navigation from "../Navigation/Navigation";
import Card from "../Card/Card";
import s from "./Seacrch.module.css";
import classNames from "classnames";
import { useState } from "react";

const Search = (props) => {
    const goods =  props.goods.map((item, i) => <Card key={i + 1} id={i} {...item} isMini={true} setFavourite={props.setFavourite} setBuy={props.setBuy} />);
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
                    text: "Товары для кухни",
                    href: "search"
                },
                {
                    text: "Кухонные наборы",
                    href: "search"
                }
            ]} />
            <section className={s.search}>
                <Container>
                    <div className={s.wrapper}>
                        <div className={s.info}>
                            <h1 className={s.title}>Кухонные наборы</h1>
                            <div className={s.sort}>
                                <div className={s.caption}>Сортировка</div>
                                <div className={s.wrap}>
                                    <button onClick={ () => { setActive(!isActive) } } className={s.button}>
                                        <div className={s.text}>{sort}</div>
                                        <img className={s.img} src={arrow} alt="arrow" />
                                    </button>
                                    <ul className={classNames(s.items, {[s.activeList]: isActive})}>
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
                        <Aside catalog={props.catalog} />
                        <div className={s.main}>
                            {
                                (goods.length !== 0) ? 
                                <ul className={s.list}>{goods}</ul>:
                                <div className={s.text}>Ничего не найдено</div>
                            }
                            {
                                (goods.length !== 0) && <button className={s.btn}>Показать ещё 20</button>
                            }
                        </div>
                    </div>
                </Container>
            </section>
            <Information />
        </>
    )
}

export default Search;