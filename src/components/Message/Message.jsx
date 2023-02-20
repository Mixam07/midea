import classNames from "classnames";
import Container from "../common/Container/Container";
import s from "./Message.module.css";

const Message = (props) => {
    const messages = props.messages.map((item, i) => {
        if(item){
            return <li key={i + 1} className={classNames(s.item, {[s.success]: item.result === true, [s.error]: item.result === false})}>
                <div className={s.text}>{item.message}</div>
                <button onClick={ () => {props.deleteMessage(i)} } className={s.btn}>Ок</button>
            </li>
        }
    })
    return(
        <div className={s.message}>
            <Container>
                <ul className={s.list}>{messages}</ul>
            </Container>
        </div>
    )
}

export default Message;