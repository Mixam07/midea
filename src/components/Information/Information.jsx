import image from "../../assets/img/image_2.png";

import Banner from "../common/Banner/Banner";
import Container from "../common/Container/Container";
import s from "./Information.module.css";

const Information = (props) => {
    return(
        <section className={s.information}>
            <Container>
                <Banner color="white">
                    <div className={s.wrapper}>
                        <div className={s.info}>
                            <h1 className={s.title}>Страница официального представителя Midea в Узбекистане</h1>
                            <h2 className={s.subtitle}>Страница официального представителя Midea в Узбекистане По всем вопросам обращайтесь к нашим специалистам</h2>
                            <button className={s.btn}>+998 71 200 0548</button>
                        </div>
                        <div className={s.img}>
                            <img src={image} alt="image" />
                        </div>
                    </div>
                </Banner>
            </Container>
        </section>
    )
}

export default Information;