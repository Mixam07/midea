import plus from "../../../assets/icons/plus.svg";
import minus from "../../../assets/icons/minus.svg";
import del from "../../../assets/icons/del.svg";

import s from "./Item.module.css";
import classNames from "classnames";

const Item = (props) => {
    const onClick = () => {
        props.setBuy(props.id, false)
    }
    return (
        <li className={s.item}>
            <button onClick={ () => { props.setActiveGood(props.id) } } className={classNames(s.btn, {[s.active]: props.isActive})}></button>
            <div className={s.img}>
                <img src={props.img} alt="photo" />
            </div>
            <div className={s.info}>
                <div className={s.title}>{props.title}</div>
                <div className={s.price}>{props.cost}</div>
            </div>
            <div className={s.wrap}>
                <span>
                    <div className={s.counter}>
                        <button onClick={ () => { props.setNumber(props.id, -1) }} className={s.button}>
                            <img src={minus} alt="minus" />
                        </button>
                        <div className={s.number}>{props.number}</div>
                        <button onClick={ () => { props.setNumber(props.id, 1) } } className={s.button}>
                            <img src={plus} alt="plus" />
                        </button>
                    </div>
                    <button onClick={onClick} className={s.del}>
                        <img src={del} alt="del" />
                    </button>
                </span>
            </div>
        </li>
    )
}

export default Item;