import s from "./Aside.module.css";
import { NavLink } from "react-router-dom";
import classNames from "classnames";
import { useState } from "react";

const Aside = (props) => {
    const [isActive, setActive] = useState(props.catalog.map(item => false));
    const [isShowList, setShowList] = useState(true);
    const catalog = props.catalog.map((elem, j) => (
        <li key={j + 1}>
            <button onClick={ () => { setActive(isActive.map((item, i) => i === j ? true : false)) } } className={classNames(s.btn, {[s.active]: isActive[j]})}>{elem.title}</button>
            {
                isActive[j] &&
                <ul className={s.list}>
                    {elem.list.map((item, i) => (
                        <li key={i + 1}>
                            <NavLink to={item.href} className={({ isActive }) => isActive ? classNames(s.activeItem, s.item) : s.item}>{item.title}</NavLink>
                        </li>
                    ))}
                </ul>
            }
        </li>
    ));
    return(
        <aside className={s.aside}>
            <NavLink className={s.main} to="/">Главная</NavLink>
            <button onClick={ () => { setShowList(!isShowList) } } className={classNames(s.button, {[s.activeList]: isShowList})}>Все категории</button>
            {isShowList && <ul className={s.btns}>{catalog}</ul>}
        </aside>
    )
}

export default Aside;