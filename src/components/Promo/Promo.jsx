import logo from "../../assets/icons/logo_mini.svg";
import image from "../../assets/img/image_1.png";

import Banner from "../common/Banner/Banner";
import Container from "../common/Container/Container";
import s from "./Promo.module.css";

const Promo = (props) => {
    return(
        <section className={s.promo}>
            <Container>
                <Banner color="blue">
                    <div className={s.wrapper}>
                        <div className={s.info}>
                            <div className={s.logo}>
                                <img src={logo} alt="logo" />
                            </div>
                            <h1 className={s.title}>Страница официального представителя Midea в Узбекистане</h1>
                            <h2 className={s.subtitle}>По всем вопросам обращайтесь к нашим специалистам</h2>
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

export default Promo;