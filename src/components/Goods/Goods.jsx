import Container from "../common/Container/Container";
import s from "./Goods.module.css";
import classNames from "classnames";
import CardContainer from "../Card/CardContainer";

const Goods = (props) => {
    const list = props.active === 1 ? props.goods:
                props.active === 2 ? props.goodsAvailability:
                props.active === 3 ? props.goodsHot : [];

    const goods = list.map((item, i) => (
        <li key={i + 1}>
            <CardContainer {...item} />
        </li>
    ))

    return(
        <section className={s.goods}>
            <Container>
                <nav className={s.nav}>
                    <button onClick={ () => { props.setActive(1) } } className={classNames(s.item, {[s.active]: props.active === 1})}>Все товары</button>
                    <button onClick={ () => { props.setActive(2) } } className={classNames(s.item, {[s.active]: props.active === 2})}>Товары в наличии</button>
                    <button onClick={ () => { props.setActive(3) } } className={classNames(s.item, {[s.active]: props.active === 3})}>Горячие товары</button>
                </nav>
                {
                    (goods.length !== 0) ? 
                    <ul className={s.list}>{goods}</ul>:
                    <div className={s.text}>Ничего не найдено</div>
                }
                {
                    (goods.length !== 0) && <button className={s.btn}>Показать ещё 20</button>
                }
            </Container>
        </section>
    )
}

export default Goods;