import image from "../../../assets/img/goods/image_1.png";
import heart from "../../../assets/icons/heart.svg";
import heart_white from "../../../assets/icons/heart-white.svg";
import share from "../../../assets/icons/share.svg";
import share_white from "../../../assets/icons/share-white.svg";
import minus from "../../../assets/icons/minus.svg";
import plus from "../../../assets/icons/plus.svg";
import backspace from "../../../assets/icons/backspace.svg";

import Container from "../../common/Container/Container";
import s from "./Info.module.css";
import { useState } from "react";
import Button from "../../common/Button/Button";

const Info = (props) => {
    const [number, setNumber] = useState(1);
    return(
        <section className={s.information}>
            <Container>
                <div className={s.wrapper}>
                    <div className={s.image}>
                        <img src={image} alt="image" />
                        <div className={s.nav}>
                            <button className={s.back}>
                                <img src={backspace} alt="backspace" />
                            </button>
                            <div className={s.btns}>
                                <button className={s.icon}>
                                    <img src={heart_white} alt="heart" />
                                </button> 
                                <button className={s.icon}>
                                    <img src={share_white} alt="share" />
                                </button> 
                            </div>
                        </div>
                    </div>
                    <div className={s.icons}>
                        <button className={s.icon}>
                            <img src={heart} alt="heart" />
                        </button> 
                        <button className={s.icon}>
                            <img src={share} alt="share" />
                        </button> 
                    </div>
                    <h1 className={s.title}>Набор кухонных принадлежностей из 12 предметов</h1>
                    <div className={s.count}>
                        <h2 className={s.caption}>Количество:</h2>
                        <div className={s.wrap}>
                            <div className={s.counter}>
                                <button onClick={ () => {number > 1 && setNumber(number - 1)} } className={s.btn}>
                                    <img src={minus} alt="minus" />
                                </button>
                                <div className={s.number}>{number}</div>
                                <button onClick={ () => {number < 20 && setNumber(number + 1)} } className={s.btn}>
                                    <img src={plus} alt="plus" />
                                </button>
                            </div>
                            <div className={s.datail}>
                                <div className={s.text}>В наличии:</div>
                                <div className={s.result}>Есть</div>
                            </div>
                        </div>
                    </div>
                    <div className={s.price}>
                        <h2 className={s.caption}>Цена:</h2>
                        <div className={s.cost}>275 000 сум</div>
                    </div>
                    <div className={s.buttons}>
                        <Button bgColor="transparent">Добавить корзину</Button>
                        <Button>Купить сейчас</Button>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Info;