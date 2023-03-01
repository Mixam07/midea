import Container from "../../common/Container/Container";
import s from "./Description.module.css";

const Description = (props) => {
    return(
        <section className={s.description}>
            <Container>
                <div className={s.wrapper}>
                    <div>
                        <h1 className={s.title}><span>Описание</span></h1>
                        <span className={s.line}></span>
                    </div>
                    <div className={s.desc}>
                        <p className={s.text}>{props.desc}</p>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Description;