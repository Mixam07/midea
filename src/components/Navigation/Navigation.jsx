import { NavLink } from "react-router-dom";
import Container from "../common/Container/Container";
import s from "./Navigfation.module.css";

const Navigation = (props) => {
    const list = props.list.map((item, i) => (
        <li className={s.item} key={i + 1}>
            <NavLink to={`/${item.href}`} className={s.href}>{item.text}</NavLink>
        </li>
    ));
    return(
        <section className={s.navigation}>
            <Container>
                <ul className={s.list}>{list}</ul>
            </Container>
        </section>
    )
}

export default Navigation