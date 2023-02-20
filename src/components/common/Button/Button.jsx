import s from "./Button.module.css";
import classNames from "classnames";

const Button = (props) => {
    return(
        <button className={classNames(s.button, s[props.bgColor])}>{props.children}</button>
    )
}

export default Button