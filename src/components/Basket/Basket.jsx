import empty from "../../assets/img/empty-basket.png";

import Container from "../common/Container/Container";
import Information from "../Information/Information";
import Navigation from "../Navigation/Navigation";
import s from "./Basket.module.css";
import Item from "./Item/Item";
import { NavLink } from "react-router-dom";

const Basket = (props) => {
    const list = props.goods.map((item, i) => <Item key={i + 1} setNumber={props.setNumber} setActiveGood={props.setActiveGood} setBuy={props.setBuy} {...item} />);
    return(
        <>
            <Navigation list={[
                {
                    text: "Главная",
                    href: ""
                },
                {
                    text: "Корзина",
                    href: "basket"
                }
            ]} />
            <section className={s.basket}>
                <Container>
                <h1 className={s.heading}>Корзина</h1>
                    {
                        props.goods.length != 0 ?
                        <div className={s.wrapper}>
                            <div className={s.list}>
                                <div className={s.btns}>
                                    <button className={s.btn}></button>
                                    <button onClick={ () => { props.resetBuy() } } className={s.del}>Удалить все</button>
                                </div>
                                <ul className={s.items}>{list}</ul>
                            </div>
                            <div className={s.info}>
                                <h2 className={s.text}>Ваш заказ</h2>
                                <div className={s.details}>
                                    <div className={s.item}>
                                        <div className={s.caption}>Товары:</div>
                                        <div className={s.number}>{props.numberActive} шт</div>
                                    </div>
                                    <div className={s.item}>
                                        <div className={s.caption}>Итого:</div>
                                        <div className={s.cost}>{props.cost}</div>
                                    </div>
                                </div>
                                <button className={s.button}>Купить</button>
                            </div>
                        </div>:
                        <div className={s.wrap}>
                            <div className={s.img}>
                                <img src={empty} alt="empty" />
                            </div>
                            <div className={s.desc}>
                                <h2 className={s.title}>В корзине пока нет товаров</h2>
                                <h3 className={s.subtitle}>Начните с подборок на главной странице или найдите нужный товар через поиск</h3>
                            </div>
                            <NavLink to="/" className={s.button}>На главную</NavLink>
                        </div>
                    }
                </Container>
            </section>
            {props.goods.length != 0 && <Information />}
        </>
    )
}

export default Basket;